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
      okToSend: false
    };

    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange(event) {
    this.handleInputChange({
      target: {
        value: event,
        id: "datetime"
      }
    });
    // this.setState({
    //   datetime: event,
    //   validationErrorsdatetime: false
    // });
  }

  handleSubmit(event) {
    console.log(JSON.stringify(event));
    alert('Your favorite flavor is: ' + this.state.okToSend);
    event.preventDefault();
  }

  handleInputChange(event) {

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
    console.log(value);
    let valid = ajv.validate(schema.properties[id], value);
    validationErrors[id] = !valid;
    console.log(JSON.stringify(validationErrors));
    const valErrorVals = Object.values(validationErrors);
    
    this.setState({
      [id]: value,
      validationErrors,
      okToSend: !(valErrorVals.length < schema.required.length ||  valErrorVals.some(v => v === true))
    });

  }

  render() {
    return (
      <div>
        <div className="container">
          <form onSubmit={this.handleSubmit} class="book">
            <div className="form-group">
              <label for="datepicker-input">Date and Time<sup>*</sup></label>
              <DatePicker id="datetime" selected={this.state.datetime} onChange={this.handleDateChange}
                showPopperArrow={false}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
                minDate={this.addDays(new Date(), 7)}
              />
              <small color="red" hidden={!this.state.validationErrors.datetime} id="datetimeHelp" class="form-text text-muted">
                Select date and time.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Ceremony<sup>*</sup></label>
              <select class="form-control preq-pname" id="ceremony" onChange={this.handleInputChange}>
                <option value="">Choose one</option>
                <option value="satyanarayan">Satyanarayan Vrat Katha</option>
                <option value="grihPravesh">Grih Pravesh</option>
                <option value="naamkaran">Mundan</option>
                <option value="mundan">Naamkaran</option>
                <option value="jamDiwas">Janm Diwas</option>
                <option value="rudrabhishek">Rudrabhishek</option>
                <option value="other">Other</option>
              </select>
              <small hidden={!this.state.validationErrors.ceremony} id="ceremonyeHelp" class="form-text text-muted">
                Ceremony should not be left blank.
              </small>
            </div>
            <div class="form-group">
              <label for="mobile" >Mobile Number<sup>*</sup></label>
              <input type="tel" class="form-control" id="mobile" aria-describedby="numberhelp" placeholder="Example: +49 151 234567"
                onChange={(event) => this.handleInputChange(event)}
              />
              <small hidden={!this.state.validationErrors.mobile} id="mobileHelp" class="form-text text-muted">
                Enter a valid mobile number.
              </small>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="city">City<sup>*</sup></label>
                <input type="text" class="form-control" id="city" onChange={this.handleInputChange} placeholder="Enter City" />
                <small hidden={!this.state.validationErrors.city} id="cityHelp" class="form-text text-muted">
                  Enter a valid city name.
              </small>
              </div>
              <div class="form-group col-md-6">
                <label for="state">State</label>
                <input type="text" class="form-control" onChange={this.handleInputChange} id="state" placeholder="Enter State" />
              </div>
              <div class="form-group col-md-6">
                <label for="country">Country<sup>*</sup></label>
                <input type="text" class="form-control" id="country" onChange={this.handleInputChange} placeholder="Enter Country" />
                <small hidden={!this.state.validationErrors.country} id="countryHelp" class="form-text text-muted">
                  Enter a valid country name.
              </small>
              </div>

              <div class="form-group col-md-6">
                <label for="postcode">Post Code<sup>*</sup></label>
                <input type="text" class="form-control" id="postcode" onChange={this.handleInputChange} placeholder="Enter Post Code" />
                <small hidden={!this.state.validationErrors.postcode} id="postcodeHelp" class="form-text text-muted">
                  Enter a valid postcode.
              </small>
              </div>

            </div>
            <div class="form-group">
              <label for="customerNeedsNComments">Special Needs / Questions about Puja</label>
              <textarea class="form-control" rows="3" name="customerNeedsNComments" id="customerNeedsNComments" cols="50" onChange={this.handleInputChange} placeholder="eg: I need puja to be performed according to the north Indian traditions. I would like to know puja the samagri and duration."></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">By clicking 'Submit' button, you agree to the <a class="booktc" href="termsconditions"> Terms and Conditions</a></label>
              <button disabled={!this.state.okToSend} id="submit" class="btn btn-primary btn-lg text-uppercase btnsubmit btn-block" type="submit">Submit</button>
              <small hidden={this.state.okToSend} id="submitHelp" class="form-text text-muted">
                Check the data before submitting!
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

