import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Ajv from 'ajv';
import Sky from 'react-sky';
import PujariGCommon from "./PujariGCommon";

const common = new PujariGCommon();
const ajv = new Ajv({ allErrors: true });

class Booknow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ceremony: "",
      datetime: null,
      mobile: "",
      city: "",
      state: "",
      country: "",
      postcode: "",
      customerNeedsNComments: "",
      validationErrors: {},
      okToSend: false,
      submitButtonText: "",
      idToken: "userNotLoggedin"
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const state = common.loginHelper(this.state);
    this.setState(state);
  }

  handleDateChange(event) {
    this.handleInputChange({
      target: {
        value: event,
        id: "datetime"
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log("state before submit: " + JSON.stringify(this.state));
    const preq = {
      datetime: this.state.datetime.getTime(),
      pujaName: this.state.ceremony,
      mobileNumber: this.state.mobile,
      location: {
        city: this.state.city,
        country: this.state.country,
        postcode: this.state.postcode
      }
    }
    if (this.state.customerNeedsNComments){
      preq.customerNeedsNComments = this.state.customerNeedsNComments;
    }

    if (this.state.state){
      preq.location.state = this.state.state;
    }
    // console.log("Data to send: " + JSON.stringify(preq));

    const req = new XMLHttpRequest();
    req.open("POST", "https://api.pujarig.com/d1/puja", true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.setRequestHeader('Authorization', this.state.idToken);
    req.send(JSON.stringify(preq));
    req.onreadystatechange = (e) => {
      if (req.readyState === 4) {
        // console.log("req.status: " + req.status);
        if (req.status === 200) {
           if(window.location.href.indexOf('state') > 0){
             window.location = window.location.href.split('&state')[0];
           }
          this.setState({
            ceremony: "",
            datetime: null,
            mobile: "",
            city: "",
            state: "",
            country: "",
            postcode: "",
            customerNeedsNComments: "",
            validationErrors: {},
            submitButtonText:  "Your request is successfully submitted. We will get back to you with the next " +
            "steps shortly. If you have any queries, please write to admin@pujarig.com",
            okToSend: false
          });
          return false;
        } else if (req.status === 401 || req.status === 0) {
          // console.log("got 401 or 0");
          // console.log(this.loginURI());
          // console.log("state beofre login: " + JSON.stringify( Object.assign({}, this.state)));
          window.location = common.loginURI("booknow") + "&state=" +
            btoa(JSON.stringify( Object.assign({}, this.state)));
         
        } else if (req.status === 400) {
          // console.log("req.status === 400");
          this.setState({
            submitButtonText:  "Server received invalid input, if the proble persist, please write to admin@pujarig.com",
            okToSend: false
          });
        } else {
          // console.log("req.status === ***");
          this.setState({
            submitButtonText:  "Unknown response from the server, please write to admin@pujarig.com",
            okToSend: false
          });
        }
      }
    }
    
  }

  handleInputChange(event) {
    // console.log("state handle input: " + JSON.stringify(this.state));
    const target = event.target;
    const value = target.value;
    const id = target.id;

    const schema = {
      "description": "JSON schema for puja request submission.",
      "type": "object",
      "additionalProperties": {
        "type": [
          "number", "integer", "string", "boolean", "array", "object", "null"
        ]
      },
      "required": [
        "ceremony", "mobile", "city", "country", "postcode", "datetime"
      ],
      "properties": {
        "datetime": {
          "type": "object", "optional": false
        },
        "city": {
          "type": "string", "optional": false, "maxLength": 64, "minLength": 3
        },
        "state": {
          "type": "string", "optional": true, "maxLength": 64, "minLenght": 0
        },
        "country": {
          "type": "string", "optional": false, "maxLength": 64, "minLength": 3
        },
        "postcode": {
          "type": "string", "optional": false, "minLength": 5, "maxLength": 15
        },
        "customerNeedsNComments": {
          "type": "string", "optional": true, "maxLength": 1500
        },
        "ceremony": {
          "type": "string", "optional": false, "minLength": 5
        },
        "mobile": {
          "type": "string", "pattern": "^\\+(?:[0-9] ?){6,14}[0-9]$", "minLength": 10, "maxLength": 25, "optional": false
        },
        "phone": {
          "type": "string", "pattern": "^\\+(?:[0-9] ?){6,14}[0-9]$", "minLength": 6, "maxLength": 25, "optional": true
        }
      }
    };

    let validationErrors = Object.assign({}, this.state.validationErrors);
    // console.log(value);
    let valid = ajv.validate(schema.properties[id], value);
    validationErrors[id] = !valid;
    // console.log(JSON.stringify(validationErrors));
    const valErrorVals = Object.values(validationErrors);

    this.setState({
      [id]: value,
      validationErrors,
      okToSend: !(valErrorVals.length < schema.required.length || valErrorVals.some(v => v === true)),
      submitButtonText: "Check the data before submitting!"
    });

  }

  render() {
    return (
      <div>   
        <div className="container">
        
          <form onSubmit={this.handleSubmit} className="book">
          {/* <Sky
          images={{
          //  FORMAT AS FOLLOWS
            0: "http://clipart-library.com/images_k/transparent-leaf-png/transparent-leaf-png-10.png",  //You can pass as many images as you want
            1: "http://www.pngall.com/wp-content/uploads/2016/04/Coconut-Free-Download-PNG.png",
            2: "http://clipart-library.com/data_images/30366.png"
          }}
          how={130} // Pass the number of images Sky will render chosing randomly 
          time={40} // time of animation
          size={'150px'} //size of the rendered images
          background={'palettedvioletred'} // color of background
          />  */}
        
            <div className="form-group">
              <p style={{ color: '#ff8800' }}>This form is not a binding contract. We get back to you within one working day.</p>
              <label >Date and Time<sup>*</sup></label>
              <DatePicker className="datepicker" id="datetime" selected={this.state.datetime} onChange={this.handleDateChange}
                showPopperArrow={false}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                placeholderText="Select Schedule Date"
                minDate={this.addDays(new Date(), 7)}
              />
              <small hidden={!this.state.validationErrors.datetime} id="datetimeHelp" className="form-text error-msg">
                Select date and time.
              </small>
            </div>
            <div className="form-group">
              <label >Ceremony<sup>*</sup></label>
              <select className="form-control preq-pname" id="ceremony" onChange={this.handleInputChange} value={this.state.ceremony}>
                <option value="">Choose one</option>
                <option value="satyanarayan">Satyanarayan Vrat Katha</option>
                <option value="grihPravesh">Grih Pravesh</option>
                <option value="naamkaran">Mundan</option>
                <option value="mundan">Naamkaran</option>
                <option value="jamDiwas">Janm Diwas</option>
                <option value="rudrabhishek">Rudrabhishek</option>
                <option value="other">Other</option>
              </select>
              <small hidden={!this.state.validationErrors.ceremony} id="ceremonyeHelp" className="form-text error-msg">
                Ceremony should not be left blank.
              </small>
            </div>
            <div className="form-group">
              <label >Mobile Number<sup>*</sup></label>
              <input type="tel" className="form-control" id="mobile" aria-describedby="numberhelp" placeholder="Example: +49 151 234567"
                onChange={(event) => this.handleInputChange(event)} value={this.state.mobile}
              />
              <small hidden={!this.state.validationErrors.mobile} id="mobileHelp" className="form-text error-msg">
                Enter a valid mobile number.
              </small>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label >City<sup>*</sup></label>
                <input type="text" className="form-control" id="city" onChange={this.handleInputChange} placeholder="Enter City" value={this.state.city}/>
                <small hidden={!this.state.validationErrors.city} id="cityHelp" className="form-text error-msg">
                  Enter a valid city name.
              </small>
              </div>
              <div className="form-group col-md-6">
                <label >State</label>
                <input type="text" className="form-control" onChange={this.handleInputChange} id="state" placeholder="Enter State" value={this.state.state}/>
              </div>
              <div className="form-group col-md-6">
                <label >Country<sup>*</sup></label>
                <input type="text" className="form-control" id="country" onChange={this.handleInputChange} placeholder="Enter Country" value={this.state.country}/>
                <small hidden={!this.state.validationErrors.country} id="countryHelp" className="form-text error-msg">
                  Enter a valid country name.
              </small>
              </div>

              <div className="form-group col-md-6">
                <label >Post Code<sup>*</sup></label>
                <input type="text" className="form-control" id="postcode" onChange={this.handleInputChange} placeholder="Enter Post Code" value={this.state.postcode}/>
                <small hidden={!this.state.validationErrors.postcode} id="postcodeHelp" className="form-text  error-msg">
                  Enter a valid postcode.
              </small>
              </div>

            </div>
            <div className="form-group">
              <label >Special Needs / Questions about Puja</label>
              <textarea className="form-control" rows="3" name="customerNeedsNComments" id="customerNeedsNComments" cols="50" onChange={this.handleInputChange} placeholder="eg: I need puja to be performed according to the north Indian traditions. I would like to know puja the samagri and duration." value={this.state.customerNeedsNComments}></textarea>
            </div>
            <div className="form-group">
              <label >By clicking 'Submit' button, you agree to the <a className="booktc"  target="_blank" href="/#termsconditions"> Terms and Conditions</a></label>
              <button disabled={!this.state.okToSend} id="submit" className="btn btn-primary btn-lg text-uppercase btnsubmit btn-block" type="submit">Submit</button>
              {/* <button onSubmit={this.onSubmit} id="submit" className="btn btn-primary btn-lg text-uppercase btnsubmit btn-block" type="submit">Submit</button> */}
              <small hidden={this.state.okToSend} id="submitHelp" className="form-text  error-msg">
                {this.state.submitButtonText}
              </small>
            </div>
          </form>

        </div>

      </div>
    );
  }
  addDays(date, days) {
    var daten = new Date(date.valueOf());
    daten.setDate(date.getDate() + days);
    return daten;
  }

}

export default Booknow;

