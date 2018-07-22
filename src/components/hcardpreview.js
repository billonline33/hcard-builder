import React, { Component } from "react";

class HCardPreview extends Component {
  render() {
    return (
      <div className="hCard_preview">
        <div className="hCard_preview-title">
          <h2>hcard preview</h2>
        </div>
        <div className="hCard_preview_container">
          <div className="hCard_preview__container_top">
            <h1>Sam Fairfax</h1>
          </div>
          <div className="hCard_preview__container_bottom">
            <div className="hCard_preview__userdata">
              <h3>Email</h3>
              <p>sam.fairfax@fairfaxmedia.com.ua</p>
            </div>
            <div className="hCard_preview__userdata">
              <h3>Phone</h3>
              <p>02 9282 2833</p>
            </div>
            <div className="hCard_preview__userdata">
              <h3>Address</h3>
              <p>1 Darling Island Road</p>
            </div>
            <div className="hCard_preview__userdata">
              <h3 />
              <p>Permont, NSW</p>
            </div>
            <div className="hCard_preview__userdata_bottom">
              <div className="hCard_preview__userdata">
                <h3>Postcode</h3>
                <p>2009</p>
              </div>
              <div className="hCard_preview__userdata">
                <h3>Country</h3>
                <p>Australia</p>
              </div>
            </div>
          </div>
          <img
            src="https://picsum.photos/85/105/?random"
            alt="https://picsum.photos/200/300/?random"
            className="hCard_preview-user"
          />
        </div>
      </div>
    );
  }
}

export default HCardPreview;
