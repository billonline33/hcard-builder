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
      country: ""
    };

    this.handleFormFieldChange = this.handleFormFieldChange.bind(this);
  }

  // callback
  /*
  handleFormFieldChange(formValue) {
    console.log("call back formValue 1111=", formValue);
    this.setState(formValue);
    console.log("state after call back:", this.state);
  }
  */

  /* whenever an input box is changed, update the state value, note we use [name] for all input here  */
  handleFormFieldChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    console.log("name=", name);
    console.log("value", value);

    this.setState({
      [name]: value
    });

    console.log("2222");
  }

  render() {
    return (
      <div className="hCard">
        <HCardForm
          formValue={this.state}
          onFormFieldChange={this.handleFormFieldChange}
        />
        <HCardPreview
          formValue={this.state}
          email={this.state.email}
          phone={this.state.phone}
          stree={this.state.street}
        />
      </div>
    );
  }
}

export default App;
