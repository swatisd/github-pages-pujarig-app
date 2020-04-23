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
          className="carousel slide"
          data-ride="carousel"
        >
         
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={window.location.origin+"/img/slider1.jpg"} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block slider1">
              <h2>Welcome to PujariG</h2>
              <h5>
                Pujarig.com facilitates online puja and delivers needed supplies.
                </h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={window.location.origin+"/img/slider2.jpg"} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block slider2">
              <h2>Welcome to PujariG</h2>
                <h5>
                Pujarig.com facilitates online puja and delivers needed supplies.
                </h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={window.location.origin+"/img/slider3.jpg"} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block slider3">
              <h2>Welcome to PujariG</h2>
              <h5>
                Pujarig.com facilitates online puja and delivers needed supplies.
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

        <section class="page-section" id="services">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
              <Bounce>
                <h2 class="section-heading text-uppercase">
                  Featured Pooja Categories
                  <hr class="fpc"></hr>
                </h2>
                </Bounce>
                <h3 class="section-subheading text-muted">
                  Pujarig.com facilitates online puja and delivers needed
                  supplies.
                </h3>
              </div>
            </div>
            <div class="row text-center animated bounce">
            
              <div class="col-md-4 showbox ">
              
                <img
                  class="img-fluid  "
                  src={window.location.origin+"/img/one.jpg"}
                  alt="Satyanarayan Vrat Katha"
                />
               
                <h4 class="service-heading">Satyanarayan Vrat Katha</h4>
              </div>
              <div class="col-md-4 showbox">
                <img
                  class="img-fluid "
                  src={window.location.origin+"/img/two.jpg"}
                  alt="Satyanarayan Vrat Katha"
                />
                <h4 class="service-heading ">Grih Parvesh</h4>
              </div>
              <div class="col-md-4 showbox ">
              
                <img class="img-fluid" src={window.location.origin+"/img/mundan.jpg"} alt="Mundan" />
                
                <h4 class="service-heading">Mundan</h4>
              </div>
            </div>
          </div>
        </section>
        
        <section class="page-section" id="about">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
              <Bounce>
                <h2 class="section-heading text-uppercase">About Us
                <hr class="abtus"></hr></h2>
                </Bounce>
                <h3 class="section-subheading text-muted">
                  How it all started.
                </h3>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <ul class="timeline">
                  <li>
                    <div class="timeline-image">
                      <img
                        class="rounded-circle img-fluid"
                        src={window.location.origin+"/img/1.jpg"}
                        alt=""
                      />
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4>2016-2017</h4>
                        <h4 class="subheading">A challange was encountered</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">
                          We wanted to have puja rituals for Grih Pravesh according to the north
                          Indian traditions. But we could not find a pandit ji in Berlin. Our family pandit ji
                          came online to give us the directions to perform the rituals rightly.
                          <p>It was a huge satisfaction as an expat!</p>
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-inverted">
                    <div class="timeline-image">
                      <img
                        class="rounded-circle img-fluid"
                        src={window.location.origin+"/img/risingsun.png"}
                        alt=""
                      />
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4>2018</h4>
                        <h4 class="subheading">A concept was created</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">
                          To benefit others like us, pujarig.com was incepted. We onboard qualified PujariGs who are available on
                          various online channels across different timezones.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline-image">
                      <img
                        class="rounded-circle img-fluid"
                        src={window.location.origin+"/img/2.jpg"}
                        alt=""
                      />
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4>2019</h4>
                        <h4 class="subheading">Transition to full service</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">
                          To give you worry free experience, pujarig.com send you the ingredients needed for the rituals at a nominal cost. You only pay 
                          the cost of ingredients to us. Dakshina (honorary) is paid to the PujariG in a transparent manner.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-inverted">
                    <div class="timeline-image">
                      <img
                        class="rounded-circle img-fluid"
                        src={window.location.origin+"/img/4n.jpg"}
                        alt=""
                      />
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4 class="subheading">For more info &amp; queries</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">
                          You can always write to admin@pujarig.com !
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-inverted">
                    <div class="timeline-image">
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

        <section class="bg-light page-section" id="termsconditions">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
              <Bounce>
                <h2 class="section-heading text-uppercase">
                  Terms &amp; Conditions
                  <hr class="tnc"></hr>
                </h2>
                </Bounce>
                <h3 class="section-subheading text-muted">
                  You agree to the below terms and conditions by login into
                  pujarig.com or by using one of its services.
                </h3>
              </div>
            </div>
            <section class="termsandconditions">
              <h2>Privacy Policy</h2>
              <h3>What personal data do we store?</h3>
              <p>
                We primarily collect email, mobile phone, name, and address. We
                may ask for additional details to facilitate online Puja
                (Example: Skype Id).
              </p>
              <hr />
              <h3>How do we use your data?</h3>
              <p>
                We use your data to to perform online puja and to send Puja ingredients.
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
                Please send an email to admin@pujarig.com from your registered email
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
                We keep on learning to serve you better. Please write your feedback and concerns to admin@pujarig.com or 
                on the <a href="#contact">contact </a> form. We shall get back to you in 2 working days.
              </p>
            </section>
          </div>
        </section>

        <section class="page-section" id="contact">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
              <div>
              <Bounce>
                <h2 class="section-heading text-uppercase">Contact Us</h2>
                <hr class="cnctus"></hr>
                </Bounce>
                <h3 class="section-subheading text-muted contactu">
                  You can always write to Us for any queries.
                </h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <form onSubmit={this.handleSubmit}
                  id="contactForm"
                  name="sentMessage"
                  novalidate="novalidate"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          class="form-control"
                          id="name"
                          type="text"
                          placeholder="Your Name *"
                          required=""
                          data-validation-required-message="Please enter your name."
                          onChange={this.handleInputChange}
                          value={this.state.name}
                        />
                        <p class="help-block text-danger"></p>
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control"
                          id="email"
                          type="email"
                          placeholder="Your Email *"
                          required=""
                          data-validation-required-message="Please enter your email address."
                          onChange={this.handleInputChange}
                          value={this.state.email}
                        />
                        <p class="help-block text-danger"></p>
                      </div>
                      <div class="form-group">
                        <input
                          class="form-control"
                          id="phone"
                          type="tel"
                          placeholder="Your Phone *"
                          required=""
                          data-validation-required-message="Please enter your phone number."
                          onChange={this.handleInputChange}
                          value={this.state.phone}
                        />
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          id="message"
                          placeholder="Your Message *"
                          required=""
                          data-validation-required-message="Please enter a message."
                          onChange={this.handleInputChange}
                          value={this.state.message}
                        ></textarea>
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton "
                        class="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                      >
                        Send Message
                      </button>
                      <small hidden={this.state.queryButtonHidden} id="submitHelp" class="form-text  error-msg">
                        {this.state.submitButtonText}
                      </small>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section class="page-section" id="location">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
              <Bounce>
                <h2 class="section-heading text-uppercase location">
                  Our Locations
                  <hr class="lctn"></hr>
                </h2>
                </Bounce>
                <h3 class="section-subheading text-muted"></h3>
              </div>
            </div>
            <section class="links">
              <div class="row">
                <section class="address">
                  <h3>Germany</h3>
                  <p>Malteserstr 87 E</p>
                  <p>12249 Berlin</p>
                  <p>Phone: +49 (030) 68001477</p>
                </section>
                <section class="address">
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

        <footer class="footer">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-4">
                <span class="copyright">Copyright © PujariG 2019</span>
              </div>
              <div class="col-md-4">
                <ul class="list-inline social-buttons">
                  <li class="list-inline-item">
                    <a href="https://twitter.com/pujarigdotcom">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.facebook.com/pujarig.online/">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item instagram">
                    <a href="#">
                      <i class="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="list-inline quicklinks">
                  <li class="list-inline-item">
                    <a href="#contact">Contact @</a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#termsconditions">Terms of Use</a>
                  </li>
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
