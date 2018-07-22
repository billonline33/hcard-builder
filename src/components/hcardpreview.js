import React, { Component } from "react";

class HCardPreview extends Component {
  render() {
    const formValue = this.props.formValue;
    console.log("hcardform.formValue=", formValue);
    return (
      <div className="hCard_preview">
        <div className="hCard_preview-title">
          <h2>hcard preview</h2>
        </div>
        <div className="hCard_preview_container">
          <div className="hCard_preview__container_top">
            <h1>
              {formValue.givenName} {formValue.surname}
            </h1>
          </div>
          <div className="hCard_preview__container_bottom">
            <div className="hCard_preview__userdata">
              <h3>Email</h3>
              <p>{formValue.email}</p>
            </div>
            <div className="hCard_preview__userdata">
              <h3>Phone</h3>
              <p>{formValue.phone}</p>
            </div>
            <div className="hCard_preview__userdata">
              <h3>Address</h3>
              <p>
                {formValue.houseNumber} {formValue.street}
              </p>
            </div>
            <div className="hCard_preview__userdata">
              <h3 />
              <p>
                {formValue.suburb}, {formValue.state}
              </p>
            </div>
            <div className="hCard_preview__userdata_bottom">
              <div className="hCard_preview__userdata">
                <h3>Postcode</h3>
                <p>{formValue.postcode}</p>
              </div>
              <div className="hCard_preview__userdata">
                <h3>Country</h3>
                <p>{formValue.country}</p>
              </div>
            </div>
          </div>
          <img src={formValue.avatar} alt="" className="hCard_preview-user" />
        </div>
      </div>
    );
  }
}

export default HCardPreview;
