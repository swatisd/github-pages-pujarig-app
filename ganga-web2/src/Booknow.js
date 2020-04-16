import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Ajv from 'ajv';

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
    // console.log("component did mount");
    let currentURL = window.location.href;
    let state = Object.assign({}, this.state);
    // console.log("state before:" + JSON.stringify(state));

    if (currentURL.indexOf('state') > 0) {
      state = JSON.parse(atob(currentURL.split('state=')[1].split('&')[0]));
      state.datetime = new Date(state.datetime);
    }
    
    
    if (currentURL.indexOf('id_token') > 0) {
      let params = currentURL.split('#')[1];
      const idToken = params.split('id_token=')[1].split('&')[0];
      state.idToken = idToken;
      const req = new XMLHttpRequest();
      req.open("GET", "https://api.pujarig.com/d1/user");
      req.setRequestHeader('Authorization', idToken);
      req.send();
      req.onreadystatechange = (e) => {
        if (req.readyState === 4) {
          // console.log(req.responseTex);
          const user = JSON.parse(req.responseText);
        }
      }
    }
    // console.log("state after parse:" + JSON.stringify(state));

    this.setState(state);
    // if(currentURL.indexOf('state') > 0){
    //   window.location = currentURL.split('#')[0];
    // }
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
            vceremony: "",
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
          window.location = this.loginURI() + "&state=" +
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

    const ajv = new Ajv({ allErrors: true });
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
          <form onSubmit={this.handleSubmit} class="book">
            <div className="form-group">
              <label for="datepicker-input">Date and Time<sup>*</sup></label>
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
              <small hidden={!this.state.validationErrors.datetime} id="datetimeHelp" class="form-text error-msg">
                Select date and time.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Ceremony<sup>*</sup></label>
              <select class="form-control preq-pname" id="ceremony" onChange={this.handleInputChange} value={this.state.ceremony}>
                <option value="">Choose one</option>
                <option value="satyanarayan">Satyanarayan Vrat Katha</option>
                <option value="grihPravesh">Grih Pravesh</option>
                <option value="naamkaran">Mundan</option>
                <option value="mundan">Naamkaran</option>
                <option value="jamDiwas">Janm Diwas</option>
                <option value="rudrabhishek">Rudrabhishek</option>
                <option value="other">Other</option>
              </select>
              <small hidden={!this.state.validationErrors.ceremony} id="ceremonyeHelp" class="form-text error-msg">
                Ceremony should not be left blank.
              </small>
            </div>
            <div class="form-group">
              <label for="mobile" >Mobile Number<sup>*</sup></label>
              <input type="tel" class="form-control" id="mobile" aria-describedby="numberhelp" placeholder="Example: +49 151 234567"
                onChange={(event) => this.handleInputChange(event)} value={this.state.mobile}
              />
              <small hidden={!this.state.validationErrors.mobile} id="mobileHelp" class="form-text error-msg">
                Enter a valid mobile number.
              </small>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="city">City<sup>*</sup></label>
                <input type="text" class="form-control" id="city" onChange={this.handleInputChange} placeholder="Enter City" value={this.state.city}/>
                <small hidden={!this.state.validationErrors.city} id="cityHelp" class="form-text error-msg">
                  Enter a valid city name.
              </small>
              </div>
              <div class="form-group col-md-6">
                <label for="state">State</label>
                <input type="text" class="form-control" onChange={this.handleInputChange} id="state" placeholder="Enter State" value={this.state.state}/>
              </div>
              <div class="form-group col-md-6">
                <label for="country">Country<sup>*</sup></label>
                <input type="text" class="form-control" id="country" onChange={this.handleInputChange} placeholder="Enter Country" value={this.state.country}/>
                <small hidden={!this.state.validationErrors.country} id="countryHelp" class="form-text error-msg">
                  Enter a valid country name.
              </small>
              </div>

              <div class="form-group col-md-6">
                <label for="postcode">Post Code<sup>*</sup></label>
                <input type="text" class="form-control" id="postcode" onChange={this.handleInputChange} placeholder="Enter Post Code" value={this.state.postcode}/>
                <small hidden={!this.state.validationErrors.postcode} id="postcodeHelp" class="form-text  error-msg">
                  Enter a valid postcode.
              </small>
              </div>

            </div>
            <div class="form-group">
              <label for="customerNeedsNComments">Special Needs / Questions about Puja</label>
              <textarea class="form-control" rows="3" name="customerNeedsNComments" id="customerNeedsNComments" cols="50" onChange={this.handleInputChange} placeholder="eg: I need puja to be performed according to the north Indian traditions. I would like to know puja the samagri and duration." value={this.state.customerNeedsNComments}></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">By clicking 'Submit' button, you agree to the <a class="booktc" href="termsconditions"> Terms and Conditions</a></label>
              <button disabled={!this.state.okToSend} id="submit" class="btn btn-primary btn-lg text-uppercase btnsubmit btn-block" type="submit">Submit</button>
              {/* <button onSubmit={this.onSubmit} id="submit" class="btn btn-primary btn-lg text-uppercase btnsubmit btn-block" type="submit">Submit</button> */}
              <small hidden={this.state.okToSend} id="submitHelp" class="form-text  error-msg">
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

  loginURI() {
    return "https://auth.pujarig.com/login?response_type=token&client_id=4f2mhs8n77ceod461gt5cvvhbt&redirect_uri=" +  this.getCallbackUrl();
  }
  isProd() {
    return window.location.href.indexOf('localhost') < 0;
  }
  
  getCallbackUrl() {
    return (this.isProd() ? 'https://pujarig.com/booknow' : 'http://localhost:3000/booknow');
  }
}

export default Booknow;

