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
  }

  render() {
    return (
      <div className=" className=" hCard>
        <HCardForm />
        <HCardPreview />
      </div>
    );
  }
}

export default App;
