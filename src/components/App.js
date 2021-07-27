import "../stylesheets/App.scss";
import React, { Component, Fragment } from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Main from "./Main";
import Menu from "./Menu";
// import "../stylesheets/styles.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu />
        <Hero />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}
export default App;
