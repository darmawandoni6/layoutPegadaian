import React, { Component } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBell } from "@fortawesome/free-solid-svg-icons";

import "../css/global.css";
class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="light" variant="light" className="border">
        <Navbar.Brand href="#home">
          <div className="brand">Ok Computer</div>
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <div className="notif">0</div>
          <FontAwesomeIcon icon={faBell} />
          &nbsp; &nbsp; Hy, Doni Darmawan &nbsp;
          <FontAwesomeIcon icon={faUser} />
        </Form>
      </Navbar>
    );
  }
}

export default NavbarComponent;
