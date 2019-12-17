import React, { Component } from "react";
import "./App.css";

import HCardForm from "./components/hcardform";
import HCardPreview from "./components/hcardpreview";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      givenName: "",
      surname: "",
      email: "",
      phone: "",
      houseNumber: "",
      street: "",
      suburb: "",
      state: "",
      postcode: "",
      country: "",
      avatar: ""
    };

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
  }

  // callback
  // handleFormFieldChange(formValue) {
  //   this.setState(formValue);
  // }

  handleFormFieldChange(event) {
    console.log("event=", event);
    this.setState({
      [event.target.name]:event.target.value});
  }

  render() {
    return (
      <div className="hCard">
        <HCardForm
          formValue={this.state}
          onFormFieldChange={this.handleFormFieldChange}
        />
        <HCardPreview formValue={this.state} />
      </div>
    );
  }
}

export default App;
