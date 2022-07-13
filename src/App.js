import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', message: ''})
  }

  render(){
    return (
      <div className="App">
        <main>
        <div className="page-loader">
          <div className="loader">Loading...</div>
        </div>
        <nav className="navbar navbar-custom navbar-transparent navbar-fixed-top one-page" role="navigation">
          <div className="container">
              <div className="navbar-header">
                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button><a className="navbar-brand" href="#top">ND SPECTRA</a>
              </div>
              <div className="collapse navbar-collapse" id="custom-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="dropdown"><a href="#top">Home</a></li>
                  <li className="dropdown"><a className="dropdown-toggle"  href="#about">About Us</a>
                      <ul className="dropdown-menu">
                          <li className="dropdown"><a href="#whychooseus">Why Choose Us?</a></li>
                          <li className="dropdown"><a href="#whoweare">Who we are?</a></li>
                      </ul>
                  </li>
                  <li className="dropdown"><a href="#services">Services</a></li>
                  <li className="dropdown"><a href="#works">Our Works</a></li>
                  <li className="dropdown"><a href="#strategy">Our Strategy</a></li>
                  <li className="dropdown"><a href="#insights">Insights</a></li>
                  <li className="dropdown"><a href="#contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
        </nav>
        <section className="home-section home-parallax home-fade home-full-height bg-dark-60 agency-page-header" id="home" data-background="images/agency/stock-g0f5e3ca7b_1920.jpg">
          <div className="titan-caption">
            <div className="caption-content">
              <div className="font-alt mb-30 titan-title-size-1">Rewrite your ideas</div>
              <div className="font-alt mb-40 titan-title-size-3">We are <span className="rotate">Strategic | Creative | Solution-driven</span>
              </div><a className="section-scroll btn btn-border-w btn-circle" href="#about">Learn More</a>
            </div>
          </div>
        </section>
        <div className="main">
          <section className="module bg-dark-60 about-page-header" data-background="images/pexels-roman-odintsov-4871011.jpg" id="about">
              <div className="container">
                <div className="row">
                  <div className="col-sm-10 col-sm-offset-1">
                    <h2 className="module-title1 font-alt">About Us</h2>
                    <div className="module-subtitle1 font-serif">
                        <p>We provide software engineers proficient in a broad spectrum of languages to help advance the technology of our clients. Software is the cornerstone of our modern world.</p>
                        <p>We have been lucky enough to be involved with many of the flagship projects occurring through the UK. </p>
                        <p>We specialize in providing talented professionals in the engineering disciplines, including: engineers, designers, R&D and support staff to expand our client’s capabilities in engineering markets in which they operate.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="main"></div>
              <section className="module pt-0 pb-0" id="whychooseus">
                <div className="row position-relative m-0">
                  <div className="col-xs-12 col-md-6 side-image" data-background="images/pexels-pavel-danilyuk-6407632.jpg"></div>
                  <div className="col-xs-12 col-md-6 col-md-offset-6 side-image-text">
                    <div className="row">
                      <div className="col-sm-12">
                        <h2 className="module-title font-alt align-left">Why Choose us?</h2>
                        <div className="module-subtitle font-serif align-left"></div>
                        <p>ND Spectra is an experienced team of people with wider experience in  consulting and setting up offshore development Centre's, BPO, KPO and RPO operations.</p>
                        <p>Access to deep pools of talent across nation for staffing requirements in offshore development Centre's and back-office operations.</p>
                        <p>Superior technology competency to handle a variety of projects across business verticals.</p>
                        <p>Deep reach in international markets across US/UK/EU/APAC.</p>
                        <p>Our business development teams are highly experienced in various industry verticals and are well meshed in the local labor market.</p>
                        <p>Unmatched pan-global recruitment network. We use state-of-the-art recruitment techniques to source, match and deliver the required talent. Flexible engagement options. We help you recruit the right candidate for all temporary, temp to permanent or permanent positions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="module" id="whoweare">
                <div className="container">
                  <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                      <h2 className="module-title-who-we-are font-alt">Who we are?</h2>
                      <div className="module-who-we-are font-serif">
                        <p>Here at ND Spectra, we believe that humans achieve more when they control their own destiny. That’s why we’re creating best-in-class solutions that empower small businesses to realize their big dreams -- starting with our small scale recruiting firm and supply chain management service.</p>
                        <p>We’re a passionate team of dreamers and builders, determined to liberate small businesses from the not-so-fun aspects of the job so that they can focus on what’s fun and important.</p>
                      </div>
                    </div>
                  </div>
                  <div className="centerr">
                    <div className="col-md-3 col-sm-6">
                      <div className="features-item">
                        <div className="features-icon"><span className="icon-lightbulb"></span></div>
                        <h3 className="features-title font-alt">Our Mission</h3>
                        <p>To redefine customer business equity with the best-of-breed transformation and talent.</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                      <div className="features-item">
                        <div className="features-icon"><span className="icon-gears"></span></div>
                        <h3 className="features-title font-alt">Our Vision</h3>
                        <p>To empower our customers to achieve core business competence through innovative and competitive IT and business process outsourcing.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="module bg-dark-30" id="services" data-background="images/pexels-roman-odintsov-4871011.jpg">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6 col-sm-offset-3">
                        <h2 className="module-title font-alt">Our Services</h2>
                        <div className="module-subtitle font-serif"></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <h6 className="font-alt"><span className="icon-tools-2"></span> Software development
                        </h6>
                        <div className="progress">
                          <div className="progress-bar pb-dark" aria-valuenow="60" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt"></span></div>
                        </div>
                        <h6 className="font-alt"><span className="icon-strategy"></span> DevOps & Platform Engineer
                        </h6>
                        <div className="progress">
                          <div className="progress-bar pb-dark" aria-valuenow="80" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt"></span></div>
                        </div>
                        <h6 className="font-alt"><span className="icon-target"></span> Cloud & I.T. Infrastructure
                        </h6>
                        <div className="progress">
                          <div className="progress-bar pb-dark" aria-valuenow="50" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt"></span></div>
                        </div>
                        <h6 className="font-alt"><span className="icon-camera"></span> Cybersecurity
                        </h6>
                        <div className="progress">
                          <div className="progress-bar pb-dark" aria-valuenow="90" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt"></span></div>
                        </div>
                        <h6 className="font-alt"><span className="icon-camera"></span> Network Engineers
                        </h6>
                        <div className="progress">
                          <div className="progress-bar pb-dark" aria-valuenow="90" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt"></span></div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <h6 className="font-alt"><span className="icon-tools-2"></span> Data Analytics
                        </h6>
                        <div className="progress">
                          <div className="progress-bar pb-dark" aria-valuenow="60" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt"></span></div>
                        </div>
                        <h6 className="font-alt"><span className="icon-strategy"></span> QA & Testing 
                        </h6>
                        <div className="progress">
                          <div className="progress-bar pb-dark" aria-valuenow="80" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt"></span></div>
                        </div>
                        <h6 className="font-alt"><span className="icon-target"></span> Salesforce
                        </h6>
                        <div className="progress">
                          <div className="progress-bar pb-dark" aria-valuenow="50" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt"></span></div>
                        </div>
                        <h6 className="font-alt"><span className="icon-camera"></span> IT support and Infrastructure 
                        </h6>
                        <div className="progress">
                          <div className="progress-bar pb-dark" aria-valuenow="90" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span className="font-alt"></span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
          <section className="module" id="works">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <h2 className="module-title font-alt">Our Works</h2>
                  <div className="module-subtitle font-serif"></div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  {/* <!-- <div id="container"></div> --> */}
                  <ul className="filter font-alt" id="filters">
                    <li><a  className="current wow fadeInUp" href="#top" data-filter="all" style={{display: 'none'}}>All</a></li>
                    <li><a className="wow fadeInUp" href="#top" data-filter=".software_development" data-wow-delay="0.2s">Software Development</a></li>
                    <li><a className="wow fadeInUp" href="#top" data-filter=".devops" data-wow-delay="0.4s">DevOps & Platform Engineer</a></li>
                    <li><a className="wow fadeInUp" href="#top" data-filter=".cloud" data-wow-delay="0.6s">Cloud & I.T. Infrastructure</a></li>
                    <li><a className="wow fadeInUp" href="#top" data-filter=".cybersecurity" data-wow-delay="0.6s">Cybersecurity</a></li>
                    <li><a className="wow fadeInUp" href="#top" data-filter=".data_analytics" data-wow-delay="0.6s">Data Analytics</a></li>
                    <li><a className="wow fadeInUp" href="#top" data-filter=".qa" data-wow-delay="0.6s">QA & Testing</a></li>
                    <li><a className="wow fadeInUp" href="#top" data-filter=".salesforce" data-wow-delay="0.6s">Salesforce</a></li>
                    <li><a className="wow fadeInUp" href="#top" data-filter=".support" data-wow-delay="0.6s">IT support and Infrastructure </a></li>
                    <li><a className="wow fadeInUp" href="#top" data-filter=".network" data-wow-delay="0.6s">Network Engineers</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row position-relative m-0">
              <div className="col-xs-12 col-md-6 side-image"  data-background="images/pexels-roman-odintsov-4871011.jpg"><div id="container"></div></div>
              <div className="col-xs-12 col-md-6 col-md-offset-6 side-image-text">
                <div className="row">
                  <div className="col-sm-12">
                  <h4 className="module-title2 font-alt">Roles we have filled</h4>
                  <div className="module-subtitle font-serif align-left"></div>
                      <ul className="" id="works-grid">
                          {/* <!-- software_development --> */}
                          <li className="work-item software_development">Full stack Developer</li>
                          <li className="work-item software_development">Backend Developer</li>
                          <li className="work-item software_development">Java Developer</li>
                          <li className="work-item software_development">Android Developer</li>
                          <li className="work-item software_development">IOS Developer</li>
                          <li className="work-item software_development">Python Developer</li>
                          <li className="work-item software_development">Angular Developer</li>
                          <li className="work-item software_development">Node JS Developer</li>

                          {/* <!-- devops --> */}
                          <li className="work-item devops">AWS Platform Engineer</li>
                          <li className="work-item devops">AZURE Platform Engineer</li>
                          <li className="work-item devops">GCP Platform Engineer</li>
                          <li className="work-item devops">Devops Engineer</li>
                          <li className="work-item devops">Site Reliability Engineer</li>

                          {/* <!-- cloud --> */}
                          <li className="work-item cloud">AWS Cloud Engineer</li>
                          <li className="work-item cloud">AZURE Cloud Engineer</li>
                          <li className="work-item cloud">GCP Cloud Engineer</li>
                          <li className="work-item cloud">AWS Solution Architect</li>
                          <li className="work-item cloud">AZURE Solution Architect</li>
                          <li className="work-item cloud">GCP Solution Architect</li>

                          {/* <!-- cybersecurity --> */}
                          <li className="work-item cybersecurity">Cyber Security Specialist</li>
                          <li className="work-item cybersecurity">Cyber Security Engineer</li>
                          <li className="work-item cybersecurity">Cyber Security Incident Response Analsyt</li>
                          <li className="work-item cybersecurity">IT Cyber Security Manager</li>
                          <li className="work-item cybersecurity">Cyber Security Architect</li>

                          {/* <!-- data_analytics --> */}
                          <li className="work-item data_analytics">Data Science Engineer</li>
                          <li className="work-item data_analytics">Cloud Data Architect</li>
                          <li className="work-item data_analytics">Senior Data Analyst</li>
                          <li className="work-item data_analytics">BI Developers</li>
                          <li className="work-item data_analytics">Machine Learning</li>
                          <li className="work-item data_analytics">Business Intelligence Specialist</li>

                          {/* <!-- qa --> */}
                          <li className="work-item qa">Software Test Analyst</li>
                          <li className="work-item qa">Automation Test Engineer</li>
                          <li className="work-item qa">QA Test Engineer</li>
                          <li className="work-item qa">Cloud Automation Tester</li>

                          {/* <!-- salesforce --> */}
                          <li className="work-item salesforce">Salesforce Support Engineer</li>
                          <li className="work-item salesforce">Salesforce Solution Architect</li>
                          <li className="work-item salesforce">Salesforce Data Migration SME</li>
                          <li className="work-item salesforce">Salesforce Developer</li>


                          {/* <!-- support --> */}
                          <li className="work-item support">Infrastructure (Virtualization, Storage, Server, Application)</li>
                          <li className="work-item support">1st - 3rd line IT Support</li>
                          <li className="work-item support">IT Managers / ServiceDesk Managers / IT Directors</li>
                          <li className="work-item support">Network and Security (Cisco, Checkpoint, Juniper, Palo Alto)</li>
                          <li className="work-item support">Cyber Security (Analysts, Penetration Testers, Forensics, Consultants)</li>
                          <li className="work-item support">IT Operations</li>
                          <li className="work-item support">Technical Architecture</li>
                          <li className="work-item support">Telephony and Voice</li>
                          <li className="work-item support">System Administration - Linux/Windows</li>
                          <li className="work-item support">ERP and CRM Support</li>
                          <li className="work-item support">Project Management</li>
                          <li className="work-item support">Business Analysis</li>
                          <li className="work-item support">Service Delivery Manager</li>

                          {/* <!-- network --> */}
                          <li className="work-item network">Network Support Engineer</li>
                          <li className="work-item network">Senior Network Engineer</li>
                          <li className="work-item network">AWS Network Engineer</li>
                          <li className="work-item network">Network Architect</li>
                          <li className="work-item network">Principal Network Engineer</li>
                      </ul>
                  </div>
              </div>
            </div>
          </div>
          </section>
          
          <section className="module bg-dark-60" id="strategy">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <h2 className="module-title font-alt">Our strategy</h2>
                  <div className="module-subtitle font-serif">Augmented ND SPECTRA IS THE RESULT OF SEVERAL STAKES</div>
                </div>
              </div>
              <div className="row multi-columns-row centerr">
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="features-item">
                    <div className="features-icon"><span className="icon-lightbulb"></span></div>
                    {/* <!-- <h3 className="features-title font-alt">Ideas and concepts</h3> --> */}
                    <p>The strengthening of our proximity & customer support.</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="features-item">
                    <div className="features-icon"><span className="icon-genius"></span></div>
                    {/* <!-- <h3 className="features-title font-alt">Optimised for speed</h3> --> */}
                    <p>Anticipating the needs of our customer.</p>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                  <div className="features-item">
                    <div className="features-icon"><span className="icon-mobile"></span></div>
                    {/* <!-- <h3 className="features-title font-alt">Designs &amp; interfaces</h3> --> */}
                    <p>The rise of new technologies and a changing industry.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="module" id="insights">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <h2 className="module-title font-alt">Insights</h2>
                  {/* <!-- <div className="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div> --> */}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-3 col-lg-3">
                  <div className="alt-features-item">
                    <div className="alt-features-icon"><span className="icon-strategy"></span></div>
                    UK is among the most innovative country in the world and has lots of innovative ideas.
                  </div>
                  <div className="alt-features-item">
                    <div className="alt-features-icon"><span className="icon-tools-2"></span></div>
                    But finding right competencies has always been a challenging task in IT sector.
                  </div>
                  <div className="alt-features-item">
                    <div className="alt-features-icon"><span className="icon-target"></span></div>
                    We at ND Spectra, tries to bridge the gap by offering our best-of-breed skilled IT developers to our customers to succeed in their mission.
                  </div>
                  {/* <!-- <div className="alt-features-item">
                    <div className="alt-features-icon"><span className="icon-tools"></span></div>
                    Our team is mixture of talent pool, from developer to subject-matter expert with several years of industry experience from various IT domains and ready to address the technical challenges.
                  </div> --> */}
                </div>
                <div className="col-md-6 col-lg-6 hidden-xs hidden-sm">
                  {/* <div className="alt-services-image align-center"><img src="images/promo.png" alt="Feature Image"></div> */}
                </div>
                <div className="col-sm-6 col-md-3 col-lg-3">
                  <div className="alt-features-item">
                    <div className="alt-features-icon"><span className="icon-camera"></span></div>
                    Our team is mixture of talent pool, from developer to subject-matter expert with several years of industry experience from various IT domains and ready to address the technical challenges.
                  </div>
                  <div className="alt-features-item">
                    <div className="alt-features-icon"><span className="icon-mobile"></span></div>
                    We offer IT talents to many innovative software companies in UK we have mastered the art.
                  </div>
                  {/* <!-- <div className="alt-features-item">
                    <div className="alt-features-icon"><span className="icon-linegraph"></span></div>
                    A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                  </div>
                  <div className="alt-features-item">
                    <div className="alt-features-icon"><span className="icon-basket"></span></div>
                    A wonderful serenity has taken possession of my entire soul like these sweet mornings.
                  </div> --> */}
                </div>
              </div>
            </div>
          </section>
          <section className="module" id="contact">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-sm-offset-3">
                  <h2 className="module-title font-alt">Get in touch</h2>
                  <div className="module-subtitle font-serif"></div>
                </div>
              </div>
              <div className="row">
              <div>
                  <form>
                      <div className="form-group">
                          <input className="form-control" type="text" name="sender_name" placeholder="Your Name" required/>
                      </div>
                      <div className="form-group">
                          <input className="form-control" type="email" name="sender_email" placeholder="Recipient's Email Address" required/>
                      </div>
                      <div className="form-group">
                          <input className="form-control" type="text" name="subject" placeholder="Subject"/>
                      </div>
                      <div className="form-group">
                          <textarea className="form-control" name="message" placeholder="Message"></textarea>
                      </div>
                      <div className="form-group">
                          <input className="form-control" type="file" name="attachment" placeholder="Attachment" required/>
                      </div>
                      <div className="form-group">
                          <input className="btn btn-primary" type="submit" name="button" value="Submit" />
                      </div>           
                  </form>
              </div>
              </div>
            </div>
          </section>
          {/* <hr className="divider-d"> */}
          <footer className="footer bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-sm-6">
                  <p className="copyright font-alt">&copy; 2022&nbsp;<a href="index.html">ND SPECTRA</a>, All Rights Reserved</p>
                </div>
                <div className="col-sm-6">
                  <div className="footer-social-links"><a href="#top"><i className="fa fa-facebook"></i></a><a href="#top"><i className="fa fa-twitter"></i></a><a href="#top"><i className="fa fa-dribbble"></i></a><a href="#top"><i className="fa fa-skype"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div className="scroll-up"><a href="#totop"><i className="fa fa-angle-double-up"></i></a></div>
        </main>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({name: event.target.value})
  }

  onEmailChange(event) {
    this.setState({email: event.target.value})
  }

  onMessageChange(event) {
    this.setState({message: event.target.value})
  }

  // handleSubmit(event) {
  // }
}
  

export default App;
