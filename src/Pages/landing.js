import React, { Component } from "react";

import Navbar from "../Componen/navbar";
import Content from "../Componen/content";
import Footer from "../Componen/footer";

class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Landing;
