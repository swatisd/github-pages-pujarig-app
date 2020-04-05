import React, { Component } from "react";

class Booknow extends Component {
  render() {
    return (
      <div>
      <div className="container">
        <form  action="javascript:onSubmit();" method="POST" class="book">
        <div class="form-group">
    <label for="exampleFormControlSelect1">Pooja</label>
    <select class="form-control preq-pname" id="exampleFormControlSelect1 preq-pname" onchange="onChange()">
    <option value=""></option>
                            <option value="satyanarayan">Satyanarayan Vrat Katha</option>
                            <option value="grihPravesh">Grih Pravesh</option>
                            <option value="naamkaran">Mundan</option>
                            <option value="mundan">Naamkaran</option>
                            <option value="jamDiwas">Janm Diwas</option>
                            <option value="rudrabhishek">Rudrabhishek</option>
                            <option value="other">Other</option>

    </select>
  </div>
  <div class="form-group">
            <label for="exampleInputEmail1" onchange="onChange()" >Mobile Number</label>
            <input
              type="tel"
              class="form-control"
              id="exampleInputNumber preq-mobile"
              aria-describedby="numberhelp"
              placeholder="Enter Number"
            />
            
          </div>
          <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">State</label>
      <input type="text" class="form-control" id="inputCity state" onchange="onChange()" placeholder="Enter State"/>
    </div>
    <div class="form-group col-md-6">
     
      <label for="inputCity">City</label>
      <input type="text" class="form-control" onchange="onChange()" id="inputCity city" placeholder="Enter City"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputCity">Country</label>
      <input type="text" class="form-control" id="inputCity country"  onchange="onChange()" placeholder="Enter Country"/>
    </div>
    <div class="form-group col-md-6">
     
    <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip postcode" onchange="onChange()" placeholder="Enter Postal code"/>
    </div>
   
  </div>
  <div class="form-row">
    <div class="form-group col-md-3">
      <label for="inputCity">Pooja Date </label>
      <input type="text" class="form-control" id="inputCity"/>
      <small id="emailHelp" class="form-text text-muted">
      Select atleast 7 days from today
            </small>
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">Time</label>
      <select class="form-control" id="exampleFormControlSelect1 preq-hr" onchange="onChange()">
     
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="0">12</option>
                        </select>
                   

    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">Minute</label>
      <select class="form-control" id="exampleFormControlSelect1 preq-min" onchange="onChange()">
     
      <option value=""></option>
                            <option value="00">00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="60">60</option>

 </select>
    </div>
    <div class="form-group col-md-3">
      <label for="inputZip">AM/PM</label>
      <select class="form-control" id="exampleFormControlSelect1 preq-ampm" onchange="onChange()">
     
      <option value=""></option>
                            <option value="AM">AM</option>
                            <option value="PM">PM</option>

 </select>
    </div>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Special Needs / Questions about Puja</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  name="customerNeedsNComments" id="customerNeedsNComments" rows="5" cols="50" onchange="onChange()" placeholder="eg: I need puja to be performed according to the north Indian traditions. I would like to know puja the samagri and duration."></textarea>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">By clicking 'Submit' button, you agree to the <a class="booktc" href="termsconditions"> Terms and Conditions</a></label></div>        
    <button   id="preq-submit-button" class="btn btn-primary btn-lg text-uppercase btnsubmit btn-block" type="submit">Submit</button>
  
        </form>

        

      </div>
      
      </div>
    );
  }
}

export default Booknow;

