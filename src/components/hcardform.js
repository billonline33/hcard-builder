import React, { Component } from "react";
import InputFileReader from "./inputFileReader";

class HCardForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.formValue;
    this.handleFormInputChange = this.handleFormInputChange.bind(this);
    this.handleAvatarUpload = this.handleAvatarUpload.bind(this);
  }

  /* whenever an input box is changed, update the state value, note we use [name] for all input here  */
  handleFormInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      /* use callback function, only call this funciton after setState is completed */
      function() {
        this.props.onFormFieldChange(this.state);
      }
    );
  }

  handleAvatarUpload(avatar) {
    console.log("000 handleImageUpload called", avatar);
    this.setState({ avatar }, function() {
      this.props.onFormFieldChange(this.state);
    });
  }

  render() {
    const formValue = this.props.formValue;
    return (
      <div className="hCard_form">
        <h1>hCard builder</h1>
        <form action="" id="formInput">
          <h4>personal details</h4>
          <div className="hCard_form-input">
            <label htmlFor="">Given Name</label>
            <input
              type="text"
              name="givenName"
              value={formValue.givenName}
              placeholder="Given Name"
              onChange={this.handleFormInputChange}
            />
          </div>
          <div className="hCard_form-input">
            <label htmlFor="">Surname</label>
            <input
              type="text"
              name="surname"
              value={formValue.surname}
              placeholder="Surname"
              onChange={this.handleFormInputChange}
            />
          </div>
          <div className="hCard_form-input">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              value={formValue.email}
              placeholder="Email"
              onChange={this.handleFormInputChange}
            />
          </div>
          <div className="hCard_form-input">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              name="phone"
              value={formValue.phone}
              placeholder="Phone"
              onChange={this.handleFormInputChange}
            />
          </div>

          <h4>address</h4>
          <div className="hCard_form-input">
            <label htmlFor="">House name or #</label>
            <input
              type="text"
              name="houseNumber"
              value={formValue.houseNumber}
              placeholder="House name or #"
              onChange={this.handleFormInputChange}
            />
          </div>
          <div className="hCard_form-input">
            <label htmlFor="">Street</label>
            <input
              type="text"
              name="street"
              value={formValue.street}
              placeholder="Street"
              onChange={this.handleFormInputChange}
            />
          </div>
          <div className="hCard_form-input">
            <label htmlFor="">Suburb</label>
            <input
              type="text"
              name="suburb"
              value={formValue.suburb}
              placeholder="Suburb"
              onChange={this.handleFormInputChange}
            />
          </div>
          <div className="hCard_form-input">
            <label htmlFor="">State</label>
            <input
              type="text"
              name="state"
              value={formValue.state}
              placeholder="State"
              onChange={this.handleFormInputChange}
            />
          </div>
          <div className="hCard_form-input">
            <label htmlFor="">Postcode</label>
            <input
              type="text"
              name="postcode"
              value={formValue.postcode}
              placeholder="Postcode"
              onChange={this.handleFormInputChange}
            />
          </div>
          <div className="hCard_form-input">
            <label htmlFor="">Country</label>
            <input
              type="text"
              name="country"
              value={formValue.country}
              placeholder="Country"
              onChange={this.handleFormInputChange}
            />
          </div>
        </form>
        <InputFileReader onAvatarUploadedCallback={this.handleAvatarUpload} />{" "}
        {/* InputFileReader must be outside the form*/}
        <button
          type="submit"
          form="formInput"
          className="button-create float-left"
          value="Submit"
        >
          Create hCard
        </button>
      </div>
    );
  }
}

export default HCardForm;
