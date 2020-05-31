import React,{Component} from 'react';  

import OwlCarousel from 'react-owl-carousel';  

import 'owl.carousel/dist/assets/owl.carousel.css';  

import 'owl.carousel/dist/assets/owl.theme.default.css';  

import './owl.css';  



export class OwlDemo extends Component {  

        render()  

        {      

          return (  

              <div>  

           

        <div class='container-fluid' >   

          <OwlCarousel items={3} margin={8} autoplay ={true} >  
          
        <div >
          <img  className="img" src= {'window.location.origin+"/img/one.jpg'}/></div> 

           <div><img  className="img" src= {'window.location.origin+"/img/one.jpg'}/></div>  

           <div><img  className="img" src= {'window.location.origin+"/img/one.jpg'}/></div>  

           <div><img  className="img" src= {'window.location.origin+"/img/one.jpg'}/></div>  

           <div><img className="img" src= {'window.location.origin+"/img/one.jpg'}/></div>  

           <div><img className="img" src= {'window.location.origin+"/img/one.jpg'}/></div>  

           <div><img className="img" src= {'window.location.origin+"/img/one.jpg'}/></div>  
           
      </OwlCarousel>    

      </div>  

      </div>  

          )  

        }  

   }  

        

export default OwlDemo;  