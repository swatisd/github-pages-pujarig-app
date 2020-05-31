import React from "react";
import "./Detail.css";
//import { bounce } from 'react-animations';
//import styled, { keyframes } from 'styled-components';
export default function Detail() {
  return (
     <div>
    <section class="detail-page">
        <div class="container detail-section-m">
        <div class="row">
            <div class="col-md-5 image-section">
            <div class="detail-image">
                    <a href = "/booknow">  <img
                            className="img-fluid "
                            src={window.location.origin+"/img/one.jpg"}
                            alt="Satyanarayan Vrat Katha"
                          />  </a> 
            </div>
            </div>
            <div class="col-md-7 content-section">
                  <p class="product-title">Name</p>
                  <p class="product-info"><span>Place</span> | <span>Language</span></p>
                  <div id="accordion">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          About this Puja
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body aboutproduct-detail">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Detailed View
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body aboutproduct-detail">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div> 
  </div>
 
</div>
  <div>
    <a href ="/Booknow"> 
      <button  className="align-middle btn btn-primary btn-lg text-uppercase btnsubmit btn-block detail-btn" type="submit">submit</button>
      </a>
      </div>
            </div>
        </div> 
        <hr/>
        <div class="row">
            <div class="col-md-5">
            <p class="review-heading">Customer reviews & ratings</p>
              <div class="row">
              
                <div class="col-md-3"><span class="rating-number">4.1</span></div>
                <div class="col-md-9">
                  <p><span ><i class="fa fa-star" aria-hidden="true">

                  </i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i></span> </p>
                  <p>141 ratings</p>
                </div>
              </div>  
        <div class="row">
            <div class="ml-3 rvwbtn"><a class=" ReviewBtn"  
             type="button">See all reviews</a></div>
            <div class="ml-3 writervwbtn"><a class=" writeReviewBtn"  
             type="button">Write a review</a></div>
        </div>  
            </div>
            <div class="col-md-7">
              <div>
                  <p class="review-highlights ">Review one</p>
                  <p><span ><i class="fa fa-star" aria-hidden="true">

                  </i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i></span><span class="review-title">Just amazing!</span> </p>
                  <p class="review-text">tAnim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. 
                  Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
              </div>
              <div>

              </div>
            </div>
        </div>
        <hr/>
        <div class="row">
        <p class="gallery-text mx-auto">Gallery</p>
        </div>
        <div class="row gallery-imgs">
        
            <div class="col-md-3"><img
                  className="img-fluid border "
                  src={window.location.origin+"/img/one.jpg"}
                  alt="Satyanarayan Vrat Katha"
                /></div>
            <div class="col-md-3 "><img
                  className="img-fluid border"
                  src={window.location.origin+"/img/one.jpg"}
                  alt="Satyanarayan Vrat Katha"
                /></div>
            <div class="col-md-3"><img
                  className="img-fluid border"
                  src={window.location.origin+"/img/one.jpg"}
                  alt="Satyanarayan Vrat Katha"
                /></div>
            <div class="col-md-3"><img
                  className="img-fluid border"
                  src={window.location.origin+"/img/one.jpg"}
                  alt="Satyanarayan Vrat Katha"
                /></div>
        </div> 
        </div>                
</section>
<hr/>

<section className="page-section  margin-top-detail" id="location">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
              
                <h2 className="section-heading text-uppercase location">
                  Our Locations
                  <hr className="lctn"></hr>
                </h2>
                
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
