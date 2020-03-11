import React, { Component } from "react";
import Header from "./Components/header/header";
import About from "./Components/about/about";
import Resume from "./Components/resume/resume";
import Portfolio from "./Components/portfolio/portfolio";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
      </div>
    );
  }
}
export default App;
