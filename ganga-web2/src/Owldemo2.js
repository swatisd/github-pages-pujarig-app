import React,{Component} from 'react';  

import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

import './owl.css';  
import './Detail';

export class Owldemo2 extends Component {  

        render()  

        {  

          return (  

            <div id="pujarig-section">  

         

       <div class='container' >            

        <OwlCarousel items={3}  

          className="owl-theme"  

          loop  

          nav  

          margin={8} >  

           <div class="border" >
           < a href = "/Detail">
           <img
                  className="img-fluid p-2 "
                  src={window.location.origin+"/img/VimalTripathi.jpeg"}
                  alt="Vimal Tripathi"
                />  </a>
               
                <h5 className="service-heading effect1 pandit1">P. Vimal Tripathi Ji</h5>
                <h6 class="pandit_place">Lucknow</h6>
            
             </div>  

           <div class="border">
           < a href = "/Detail">
           <img
                  className="img-fluid p-2"
                  src={window.location.origin+"/img/UmakantSharma.jpeg"}
                  alt="Umakant Sharma"
                />  </a>
                <h5 className="service-heading effect1 pandit2">P. Umakant Sharma Ji</h5> <h6 class="pandit_place">Bhopal</h6>
             
             </div>  

           <div class="border"> 
           < a href = "/Detail">
           <img className="img-fluid p-2" src={window.location.origin+"/img/DwarikaPrasadGautam.jpeg"} alt="P. Gautam" />
                </a> 
                <h5 className="service-heading effect1 pandit3">P. Dwarika Prasad Gautam Ji</h5><h6 class="pandit_place"> Jhansi</h6>
             
             </div>  

           <div class="border align-middle">
           < a href = "/Detail">
           <img
                  className="img-fluid p-2 align-middle "
                  src={window.location.origin+"/img/VimalTripathi.jpeg"}
                  alt="Vimal Tripathi"  
                />
               </a>
                <h5 className="service-heading effect1 pandit1">P. Vimal Tripathi Ji</h5>
                <h6 class="pandit_place">Lucknow</h6>
             
              </div>  

           <div class="border align-middle">
           < a href = "/Detail">
           <img
                  className="img-fluid p-2 align-middle"
                  src={window.location.origin+"/img/UmakantSharma.jpeg"}
                  alt="Umakant Sharma"
                /> </a>
                <h5 className="service-heading effect1 pandit2">P. Umakant Sharma Ji</h5> <h6 class="pandit_place">Bhopal</h6>
            
             </div>  

           <div class="border align-middle">
           < a href = "/Detail">
           <img className="img-fluid p-2" src={window.location.origin+"/img/DwarikaPrasadGautam.jpeg"} alt="P. Gautam" />
                </a>
                <h5 className="service-heading effect1 pandit3">P. Dwarika Prasad Gautam Ji</h5><h6 class="pandit_place"> Jhansi</h6>
           
            </div>  

           <div class="border">
           < a href = "/Detail">
           <img
                  className="img-fluid p-2 d-flex justify-content-center d-flex justify-content-between align-middle "
                  src={window.location.origin+"/img/VimalTripathi.jpeg"}
                  alt="Vimal Tripathi"
                /> </a>
               
                <h5 className="service-heading effect1 pandit1">P. Vimal Tripathi Ji</h5>
                <h6 class="pandit_place">Lucknow</h6>
             
            </div>  

      </OwlCarousel>  

      </div>  

  

      </div>  

          )  

        }  

      }  

        



export default Owldemo2; 