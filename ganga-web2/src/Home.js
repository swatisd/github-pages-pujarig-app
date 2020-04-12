import React, { Component } from "react";
import {Animated} from "react-animated-css";

// Unused components
// import { Button, ButtonToolbar } from "react-bootstrap";
// import { Booknow } from "./Booknow";


class Home extends Component {
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
            <img src={process.env.PUBLIC_URL+"/img/slider1.jpg"} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              <h2>Welcome to Pujarig</h2>
              <h5>
                Pujarig.com facilitates online puja and delivers needed supplies.
                </h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={process.env.PUBLIC_URL+"/img/slider2.jpg"} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              <h2>Welcome to Pujarig</h2>
                <h5>
                Pujarig.com facilitates online puja and delivers needed supplies.
                </h5>
              </div>
            </div>
            <div className="carousel-item">
            <img src={process.env.PUBLIC_URL+"/img/slider3.jpg"} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
              <h2>Welcome to Pujarig</h2>
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
                <h2 class="section-heading text-uppercase">
                  Featured Pooja Categories
                </h2>
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
                  src={process.env.PUBLIC_URL+"/img/one.jpg"}
                  alt="Satyanarayan Vrat Katha"
                />
               
                <h4 class="service-heading">Satyanarayan Vrat Katha</h4>
              </div>
              <div class="col-md-4 showbox">
                <img
                  class="img-fluid "
                  src={process.env.PUBLIC_URL+"/img/two.jpg"}
                  alt="Satyanarayan Vrat Katha"
                />
                <h4 class="service-heading ">Grih Parvesh</h4>
              </div>
              <div class="col-md-4 showbox ">
              
                <img class="img-fluid" src={process.env.PUBLIC_URL+"/img/three.jpg"} alt="Mundan" />
                
                <h4 class="service-heading">Mundan</h4>
              </div>
            </div>
          </div>
        </section>

        <section class="page-section" id="about">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">About Us</h2>
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
                        src={process.env.PUBLIC_URL+"/img/1.jpg"}
                        alt=""
                      />
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4>2009-2011</h4>
                        <h4 class="subheading">Our Humble Beginnings</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">
                          I am Ruchi, a full time baker livIng in Berlin and a
                          textile designer by profession, a proud Indian not
                          just by origin but also by values, born and brought up
                          in Rajput family where religious ceremonies and
                          rituals are integral part of daily life.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-inverted">
                    <div class="timeline-image">
                      <img
                        class="rounded-circle img-fluid"
                        src={process.env.PUBLIC_URL+"/img/2.jpg"}
                        alt=""
                      />
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4>March 2011</h4>
                        <h4 class="subheading">An Agency is Born</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">
                          I started pujarig.com out of my own need when I wanted
                          to have grih pravesh puja for my new house!!
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="timeline-image">
                      <img
                        class="rounded-circle img-fluid"
                        src={process.env.PUBLIC_URL+"/img/3.jpg"}
                        alt=""
                      />
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4>December 2012</h4>
                        <h4 class="subheading">Transition to Full Service</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">
                          The pujari jee of our choice was only available in a
                          different city, a few hundred kilometers away ! It was
                          too expensive in terms of both time and money to
                          arrange his trip to Berlin. So the idea of online puja
                          sparkled and I conducted online puja for the ceremony
                          !
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="timeline-inverted">
                    <div class="timeline-image">
                      <img
                        class="rounded-circle img-fluid"
                        src={process.env.PUBLIC_URL+"/img/4.jpg"}
                        alt=""
                      />
                    </div>
                    <div class="timeline-panel">
                      <div class="timeline-heading">
                        <h4 class="subheading">For More Info &amp; Queries</h4>
                      </div>
                      <div class="timeline-body">
                        <p class="text-muted">
                          You can always write to admin@pujarig.com for further
                          queries !
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
                <h2 class="section-heading text-uppercase">
                  Terms &amp; Conditions
                </h2>
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
                We use your data to store your online Puja requests, to perform
                online puja, and to send Puja ingredients.
              </p>
              <hr />
              <h3>What personal data do we store?</h3>
              <p>
                We primarily collect email, mobile phone, name, and address. We
                may ask for additional details to facilitate online Puja
                (Example: Skype Id).
              </p>
              <hr />
              <h3>Do we share data with anyone?</h3>
              <p>
                We share your contact and location data with Pujari Ji who is
                supposed to perform Puja. We may also share your address to our
                trusted partners to send Puja ingredients to you.
              </p>
              <hr />
              <h3>How to remove your data from our servers?</h3>
              <p>
                Please send an email to @pujarig.com from your registered email
                address and ask us to delete your data. We may still have to
                keep some of the data due to the legal requirements.
              </p>
              <hr />
              <h2>Our Liabilties</h2>
              <p>
                We limit our liabilities to refund the money directly taken by
                pujarig.com when the Puja is cancelled or delayed by more than 2
                hours.
              </p>
              <p>
                We cannot be held liable for the damages caused by the other
                service providers affiliated to pujarig.com.
              </p>
              <p>
                Please be aware that we are still in a very early stage of
                pujarig.com service development and are learning to serve you
                better. Hence, some minor service disruptions may be expected.
              </p>
            </section>
          </div>
        </section>

        <section class="page-section" id="contact">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 text-center">
              <div>
                <h2 class="section-heading text-uppercase">Contact Us</h2>
                <h3 class="section-subheading text-muted contactu">
                  You can always write to Us for any queries.
                </h3>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <form
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
                        ></textarea>
                        <p class="help-block text-danger"></p>
                      </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-lg-12 text-center">
                      <div id="success"></div>
                      <button
                        id="sendMessageButton"
                        class="btn btn-primary btn-xl text-uppercase"
                        type="submit"
                      >
                        Send Message
                      </button>
                      
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
                <h2 class="section-heading text-uppercase location">
                  Our Locations
                </h2>
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
                    <a href="https://developer.twitter.com/en/docs/twitter-for-websites/follow-button/overview">
                      <i class="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="https://www.facebook.com/pujarig.online/">
                      <i class="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item">
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
