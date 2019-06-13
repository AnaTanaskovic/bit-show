import React, { Component, Fragment } from "react";
import Header from "./../components/Header";
import Footer from "./../components/Footer/Footer";
import Main from "../Main";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header title="BIT Shows" />
        <Main />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
