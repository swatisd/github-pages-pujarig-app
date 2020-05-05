import React, { Component } from "react";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import PujariGCommon from "./PujariGCommon";
const common = new PujariGCommon();


// Unused components
// import { Button, ButtonToolbar } from "react-bootstrap";
// import { Booknow } from "./Booknow";
// import {Animated} from "react-animated-css";

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      idToken: "userNotLoggedin",
      queryButtonHidden: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const state = common.loginHelper(this.state);
    this.setState(state);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const id = target.id;
    this.setState({
      [id]: value,
      queryButtonHidden: true,
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    const queryData = {
      name: this.state.name,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message
    }
    
    if(!queryData.name || !queryData.email || !queryData.phone)
      return false;

    const req = new XMLHttpRequest();
    req.open("POST", "https://api.pujarig.com/d1/customerquery", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(queryData));
    req.onreadystatechange = (e) => {
      if (req.readyState === 4) {
        // console.log("req.status: " + req.status);
        if (req.status === 200) {
          this.setState({
            name: "",
            phone: "",
            email: "",
            message: "",
            submitButtonText:  "Thank you for contacting us. We shall get back to you within 2 working days.",
            queryButtonHidden: false
          });
          return false;
        } else if (req.status === 400) {
          // console.log("req.status === 400");
          this.setState({
            submitButtonText:  "Server received invalid input, if the proble persist, please write to admin@pujarig.com",
            queryButtonHidden: false
          });
        } else {
          // console.log("req.status === ***");
          this.setState({
            submitButtonText:  "Unknown response from the server, please write to admin@pujarig.com",
            queryButtonHidden: false
          });
        }
      }
    }
  }

  render() {
    return (
      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide d-none d-md-block"
          data-ride="carousel"
        >
      
         
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={window.location.origin+"/img/slider1.jpg"} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block slider1">
              <h2>Welcome to <a href="https://pujarig.com">pujarig.com</a>!</h2>
              <h5>
                 We deliver the needed Pujan Samagri. Our Pandit Ji conducts Online Puja. Cost Effective and Worry Free !
                </h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={window.location.origin+"/img/slider2.jpg"} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block slider2">
              <h2>Welcome to <a href="https://pujarig.com">pujarig.com</a>!</h2>
                <h5>
                 We deliver the needed Pujan Samagri. Our Pandit Ji conducts Online Puja. Cost Effective and Worry Free !
                </h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={window.location.origin+"/img/slider3.jpg"} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block slider3">
              <h2>Welcome to <a href="https://pujarig.com">pujarig.com</a>!</h2>
              <h5>
                 We deliver the needed Pujan Samagri. Our Pandit Ji conducts Online Puja. Cost Effective and Worry Free !
                </h5>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <section className="page-section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
              <Bounce>
                <h2 className="section-heading text-uppercase">
                  Featured Pooja Categories
                  <hr className="fpc"></hr>
                </h2>
                </Bounce>
                <h3 className="section-subheading text-muted">
                 We deliver the needed Pujan Samagri. Our Pandit Ji conducts Online Puja. Cost Effective and Worry Free !
                </h3>
              </div>
            </div>
            <div className="row text-center animated bounce">
            
              <div className="col-md-4 showbox ">
              
                <img
                  className="img-fluid  "
                  src={window.location.origin+"/img/one.jpg"}
                  alt="Satyanarayan Vrat Katha"
                />
               
                <h4 className="service-heading">Satyanarayan Vrat Katha</h4>
              </div>
              <div className="col-md-4 showbox">
                <img
                  className="img-fluid "
                  src={window.location.origin+"/img/two.jpg"}
                  alt="Satyanarayan Vrat Katha"
                />
                <h4 className="service-heading ">Grih Parvesh</h4>
              </div>
              <div className="col-md-4 showbox ">
              
                <img className="img-fluid" src={window.location.origin+"/img/mundan.jpg"} alt="Mundan" />
                
                <h4 className="service-heading">Mundan</h4>
              </div>
            </div>             
          </div>
        </section>

        <section className="page-section panditG" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
              <Bounce>
                <h2 className="section-heading text-uppercase">
                  Featured PujariG
                  <hr className="fpc"></hr>
                </h2>
                </Bounce>
                <h3 className="section-subheading text-muted">
                  Meet our esteemed PujariGs
                </h3>
              </div>
            </div>
            <div className="row text-center animated bounce">
            
              <div className="col-md-4   ">
              
                <img
                  className="img-fluid  "
                  src={window.location.origin+"/img/VimalTripathi.jpeg"}
                  alt="Vimal Tripathi"
                />
               
                <h5 className="service-heading effect1">P. Vimal Tripathi Ji</h5>
                <h6>Lucknow</h6>
              </div>
              <div className="col-md-4 ">
                <img
                  className="img-fluid "
                  src={window.location.origin+"/img/UmakantSharma.jpeg"}
                  alt="Umakant Sharma"
                />
                <h5 className="service-heading effect1">P. Umakant Sharma Ji</h5> <h6>Bhopal</h6>
              </div>
              <div className="col-md-4  ">
              
                <img className="img-fluid" src={window.location.origin+"/img/DwarikaPrasadGautam.jpeg"} alt="P. Gautam" />
                
                <h5 className="service-heading effect1">P. Dwarika Prasad Gautam Ji</h5><h6> Jhansi</h6>
              </div>
            </div>             
          </div>
        </section>       
        

        <section className="page-section" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
              <Bounce>
                <h2 className="section-heading text-uppercase">About Us
                <hr className="abtus"></hr></h2>
                </Bounce>
                <h3 className="section-subheading text-muted">
                  How it all started.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <ul className="timeline">
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={window.location.origin+"/img/1.jpg"}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2017</h4>
                        <h4 className="subheading">A challange was encountered</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          We wanted to have puja rituals for Grih Pravesh according to the north
                          Indian traditions. But we could not find a Pandit Ji in Berlin. Our family Pandit Ji
                          came online. He instructed us from Sthanapana to Visarjan with Mantra Jaaps. 
                          We could rightly perform the rituals under his guidence. 
                          
                        </p>
                        <p className="text-muted">It was a huge satisfaction as an expat!</p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={window.location.origin+"/img/risingsun.png"}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2018</h4>
                        <h4 className="subheading">A concept was created</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          To benefit others like us, pujarig.com was incepted. We onboarded qualified Pandit Ji who are available on
                          various online channels across different timezones.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={window.location.origin+"/img/2.jpg"}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4>2019</h4>
                        <h4 className="subheading">Transition to full service</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          To give you worry free experience, pujarig.com send you the ingredients needed for the rituals at a nominal cost. You only pay 
                          the cost of ingredients to us. Dakshina (honorary) is paid to the PujariG in a transparent manner.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <img
                        className="rounded-circle img-fluid"
                        src={window.location.origin+"/img/4n.jpg"}
                        alt=""
                      />
                    </div>
                    <div className="timeline-panel">
                      <div className="timeline-heading">
                        <h4 className="subheading">For more info &amp; queries</h4>
                      </div>
                      <div className="timeline-body">
                        <p className="text-muted">
                          You can always write to <a href="mailto://admin@pujarig.com">admin@pujarig.com </a> !
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="timeline-inverted">
                    <div className="timeline-image">
                      <h4>
                        Be Part
                        <br />
                        Of Our
                        <br />
                        Story!
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section team" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
              <Bounce>
                <h2 className="section-heading text-uppercase">The pujarig.com Team
                <hr className="abtus"></hr></h2>
                </Bounce>
                <h3 className="section-subheading text-muted">
                   We are a team of IIT Kanpur graduates with several years of IT experience.
                </h3>
              </div>
            </div>
            <div class="row team_row">

          <div class="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up">
            <div class="member">
              <div class="pic"><img src={window.location.origin+"/img/ManishSingh.jpg"} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h5>Manish Pratap Singh</h5>
                <span><p class="member_role">Technology & Operations</p>Founder pujarig.com Berlin & Lucknow</span>
                
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="member">
              <div class="pic"><img src={window.location.origin+"/img/vineet.jpg"} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h5>Vineet Dwivedi </h5>
                <span><p class="member_role">Advisor</p>CEO Flipclass.com, Hiresure.ai  Bangaluru</span>
                
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="member">
              <div class="pic"><img src={window.location.origin+"/img/mp.jpg"} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h5>Mahendra Pratap</h5>
                <span><p class="member_role">UX Incubator</p> CEO Shiksha Infotech Incubation Centre Bangaluru</span>
                
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <div class="member">
              <div class="pic"><img src={window.location.origin+"/img/sankum.jpg"} class="img-fluid" alt=""/></div>
              <div class="member-info">
                <h5>Sanjeev Mishra</h5>
                <span><p class="member_role">Digital Marketing Strategy</p>Director Navyug Infosolutions Noida</span>
                
              </div>
            </div>
          </div>

        </div>
          </div>
        </section>

        <section className="bg-light page-section" id="termsconditions">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
              <Bounce>
                <h2 className="section-heading text-uppercase">
                  Terms &amp; Conditions
                  <hr className="tnc"></hr>
                </h2>
                </Bounce>
                <h3 className="section-subheading text-muted">
                  You agree to the below terms and conditions by login into
                  pujarig.com or by using one of its services.
                </h3>
              </div>
            </div>
            <section className="termsandconditions">
              <h2>Privacy Policy</h2>
              <h3>What personal data do we store?</h3>
              <p>
                We primarily collect email, mobile phone, name, and address. We
                may ask for additional details to facilitate Online Puja
                (Example: Skype Id).
              </p>
              <hr />
              <h3>How do we use your data?</h3>
              <p>
                We use your data to to perform Online Puja and to send Puja ingredients.
              </p>
              <hr />
              <h3>Do we share data with anyone?</h3>
              <p>
                We share your contact and location details with the pujari ji who is
                supposed to perform the puja. We may also share your address to our
                trusted partners to get the puja ingredients delivered to you.
              </p>
              <hr />
              <h3>How to remove your data from our servers?</h3>
              <p>
                Please send an email to <a href="mailto://admin@pujarig.com">admin@pujarig.com </a> from your registered email
                address asking us to delete your data. We may still have to
                keep some of the data due to the legal requirements.
              </p>
              <hr />
              <h2>Our Liabilties</h2>
              <p>
                We strive to give you the best possible experience. But  
                when a puja cannot be performed or delayed by more than 2
                hours due to the non availability of the pujari ji on our platform, we limit our liabilities to refund the money towards the Dakshina payment.
                The puja ingredients have to be returned in order to get a refund for the same.
              </p>
              <p>
                We cannot be held liable for the damages caused by the other
                service providers directly or indirectly associtated with pujarig.com or its services.
              </p>
              <p>
                We keep on learning to serve you better. Please write your feedback and concerns to <a href="mailto://admin@pujarig.com">admin@pujarig.com </a> or 
                on the <a href="#contact">contact </a> form. We shall get back to you within two working days.
              </p>
            </section>
          </div>
        </section>

        <section className="bg-light page-section" id="legal">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
              <Bounce>
                <h2 className="section-heading text-uppercase">
                  Legal
                  <hr className="tnc"></hr>
                </h2>
                </Bounce>
              </div>
            </div>
            <section className="termsandconditions">
              <h2>Impressum</h2>
              <p>Business is registered in the name of </p>
               <p>Ruchi Singh </p>
              <p>Malterserstr. 87 E </p>
              <p>12249 Berlin </p>
              <p>IBAN: DE48 1007 0024 0087 7670 00</p>
            </section>
          </div>
        </section>

        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
            <div className="col-lg-12 text-center">
             
                <h3 className="section-heading text-uppercase">
                Want to know more about pujarig.com and how it works?

                  <hr className="fpc"></hr>
                </h3>
              <div class="background_strip">
                <h3 className="section-subheading ">
                Just fill in the form below!

                </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form onSubmit={this.handleSubmit}
                  id="contactForm"
                  name="sentMessage"
                  noValidate="novalidate"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Your Name *"
                          required=""
                          data-validation-required-message="Please enter your name."
                          onChange={this.handleInputChange}
                          value={this.state.name}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          placeholder="Your Email *"
                          required=""
                          data-validation-required-message="Please enter your email address."
                          onChange={this.handleInputChange}
                          value={this.state.email}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="phone"
                          type="tel"
                          placeholder="Your Phone *"
                          required=""
                          data-validation-required-message="Please enter your phone number."
                          onChange={this.handleInputChange}
                          value={this.state.phone}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="message"
                          placeholder="Your Message *"
                          required=""
                          data-validation-required-message="Please enter a message."
                          onChange={this.handleInputChange}
                          value={this.state.message}
                        ></textarea>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton "
                        className="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                      >
                        Send Message
                      </button>
                      <small hidden={this.state.queryButtonHidden} id="submitHelp" className="form-text  error-msg">
                        {this.state.submitButtonText}
                      </small>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="location">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
              <Bounce>
                <h2 className="section-heading text-uppercase location">
                  Our Locations
                  <hr className="lctn"></hr>
                </h2>
                </Bounce>
                <h3 className="section-subheading text-muted"></h3>
              </div>
            </div>
            <section className="links">
              <div className="row">
                <section className="address">
                  <h3>Germany</h3>
                  <p>Malteserstr 87 E</p>
                  <p>12249 Berlin</p>
                  <p>Phone: +49 (030) 68001477</p>
                </section>
                <section className="address">
                  <h3>India</h3>
                  <p>3, Patel Nagar ext.Near Sector 9</p>
                  <p>Indira Nagar, Lucknow, UP</p>
                  <p>226016</p>
                  <p>Whatsapp: +91 9120890061</p>
                </section>
              </div>
            </section>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright">Copyright © pujarig.com 2019 - 2020</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://twitter.com/pujarigdotcom">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/pujarig.online/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item instagram">
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a href="#contact">Contact @</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#termsconditions">Terms of Use</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#legal">Impressum</a>
                  </li>
                  {/* <li className="list-inline-item">
                    <a href="#sitemap">Sitemap</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </footer>

      
      </div>
    );
  }
}

// Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the `public` folder during the build.
// Only files inside the `public` folder can be referenced from the HTML.
// Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will work correctly both with client-side routing and a non-root public URL.
// Learn how to configure a non-root public URL by running `npm run build`.

export default Home;
