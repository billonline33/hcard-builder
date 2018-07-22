import React, { Component } from "react";

class HCardForm extends Component {
  render() {
    return (
      <div className="hCard_form">
        <h1>hCard builder</h1>

        <form action="">
          <h4>personal details</h4>
          <div className="hCard_form-input">
            <label for="">Given Name</label>
            <input type="text" name="givenName" placeholder="Given Name" />
          </div>
          <div className="hCard_form-input">
            <label htmlfor="">Surname</label>
            <input type="text" name="surname" placeholder="Surname" />
          </div>
          <div className="hCard_form-input">
            <label for="">Email</label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="hCard_form-input">
            <label for="">Phone</label>
            <input type="text" name="phone" placeholder="Phone" />
          </div>

          <h4>address</h4>
          <div className="hCard_form-input">
            <label for="">House name or #</label>
            <input
              type="text"
              name="houseNumber"
              placeholder="House name or #"
            />
          </div>
          <div className="hCard_form-input">
            <label for="">Street</label>
            <input type="text" name="street" placeholder="Street" />
          </div>
          <div className="hCard_form-input">
            <label for="">Suburb</label>
            <input type="text" name="suburb" placeholder="Suburb" />
          </div>
          <div className="hCard_form-input">
            <label for="">State</label>
            <input type="text" name="state" placeholder="State" />
          </div>
          <div className="hCard_form-input">
            <label for="">Postcode</label>
            <input type="text" name="postcode" placeholder="Postcode" />
          </div>
          <div className="hCard_form-input">
            <label for="">Country</label>
            <input type="text" name="country" placeholder="Country" />
          </div>
          <input
            className="button-upload"
            type="submit"
            value="Upload Avatar"
          />
          <input className="button-create" type="submit" value="Create hCard" />
        </form>
      </div>
    );
  }
}

export default HCardForm;
