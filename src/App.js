import React, { Component } from "react";
import "./App.css";

import HCardForm from "./components/hcardform";
import HCardPreview from "./components/hcardpreview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HCardForm />
        <HCardPreview />
      </div>
    );
  }
}

export default App;
