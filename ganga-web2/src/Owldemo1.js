import React,{Component} from 'react';  

import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

import './owl.css';  

import './Detail';

export class Owldemo1 extends Component {  

        render()  

        {  

          return (  

            <div id="puja-section">  

         

       <div class='container' >            

        <OwlCarousel items={3}  

          className="owl-theme"  

          loop  

          nav  

          margin={8} >  

           <div >
                              < a href = "/Detail">
             <img
                  className="img-fluid border p-2 "
                  src={window.location.origin+"/img/one.jpg"}
                  alt="Satyanarayan Vrat Katha" data-toggle="tooltip" data-placement="top" title="Puja Info"
                />  </a>
                <p class="p-3 puja-name pleft1">Satyanarayan Vrat Katha</p>
               </div>  

           <div><a href="/Detail">
             <img
                  className="img-fluid border p-2 "
                  src={window.location.origin+"/img/two.jpg"}
                  alt="Grih Parvesh" data-toggle="tooltip" data-placement="top" title="Puja Info"
                /> </a>
                <p class="p-3 puja-name pleft2">Grih Parvesh</p>
                </div>  

           <div>  < a href = "/Detail">
             <img
                  className="img-fluid border p-2 "
                  src={window.location.origin+"/img/three.jpg"}
                  alt="Mundan" data-toggle="tooltip" data-placement="top" title="Puja Info"
                /> </a>
                <p class="p-3 puja-name pleft3">Mundan</p>
                </div>  

           <div>  < a href = "/Detail">
           <img
                  className="img-fluid border p-2 "
                  src={window.location.origin+"/img/one.jpg"}
                  alt="Satyanarayan Vrat Katha" data-toggle="tooltip" data-placement="top" title="Puja Info"
                /> </a>
                <p class="p-3 puja-name pleft1">Satyanarayan Vrat Katha</p>
                </div>  

           <div >  < a href = "/Detail">
             <img
                  className="img-fluid border p-2 "
                  src={window.location.origin+"/img/two.jpg"}
                  alt="Grih Parvesh" data-toggle="tooltip" data-placement="top" title="Puja Info"
                /></a>
                <p class="p-3 puja-name pleft2">Grih Parvesh</p>
                </div>  

           <div>  < a href = "/Detail">
             <img
                  className="img-fluid border p-2 "
                  src={window.location.origin+"/img/three.jpg"}
                  alt="Mundan" data-toggle="tooltip" data-placement="top" title="Puja Info"
                /> </a>
                <p class="p-3 puja-name pleft3">Mundan</p>
                </div>  

           <div>  < a href = "/Detail">
             <img
                  className="img-fluid border p-2 "
                  src={window.location.origin+"/img/one.jpg"}
                  alt="Satyanarayan Vrat Katha" data-toggle="tooltip" data-placement="top" title="Puja Info"
                /> </a>
                <p class="p-3 puja-name pleft1">Satyanarayan Vrat Katha</p>
                </div>  

      </OwlCarousel>  

      </div>  

  

      </div>  

          )  

        }  

      }  

        



export default Owldemo1;  