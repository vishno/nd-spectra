<?php
// echo "hello";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_FILES['attachment'])) {
    //Get uploaded file data using $_FILES array
    $tmp_name = $_FILES['attachment']['tmp_name']; // get the temporary file name of the file on the server
    $name     = $_FILES['attachment']['name']; // get the name of the file
    $size     = $_FILES['attachment']['size']; // get size of the file for size validation
    $type     = $_FILES['attachment']['type']; // get type of the file
    $error     = $_FILES['attachment']['error']; // get the error (if any)

    //read from the uploaded file & base64_encode content
	$handle = fopen($tmp_name, "r"); // set the file handle only for reading the file
	$content = fread($handle, $size); // reading the file
	fclose($handle);				 // close upon completion

    $encoded_content = chunk_split(base64_encode($content));
	$boundary = md5("random"); // define boundary with a md5 hashed value
  } else {
    $errors[] = 'No File Seleceted';
  }

  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];

    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }
  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = $_POST['message'];
  }
  if (empty($errors)) {
    $date = date('j, F Y h:i A');

    $emailBody = "
    <html>
    <head>
    <title>$email is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Date: <span style=\"color:#888\">$date</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Message: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";

    //attachment
	$emailBody .= "--$boundary\r\n";
	$emailBody .="Content-Type: $type; name=".$name."\r\n";
	$emailBody .="Content-Disposition: attachment; filename=".$name."\r\n";
	$emailBody .="Content-Transfer-Encoding: base64\r\n";
	$emailBody .="X-Attachment-Id: ".rand(1000, 99999)."\r\n\r\n";
	$emailBody .= $encoded_content; // Attaching the encoded file with email

    //header
    $headers = 	'From: Contact Form <contact@mydomain.com>' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" .
    "Content-Type: multipart/mixed;";

	$headers .= "boundary = $boundary\r\n"; //Defining the Boundary

    $to = 'vishnoprasadcn@gmail.com';
    $subject = 'Contacting you';

    if (mail($to, $subject, $emailBody, $headers)) {
      $sent = true;
    }
  }
}
?>

  <?php if (!empty($errors)) : ?>

{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?>


  <?php if (isset($sent) && $sent === true) : ?>

{
  "status": "success",
  "message": "Your data was successfully submitted"
}
  <?php endif; ?>