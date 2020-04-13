import React, { Component } from "react";
import { Container, Form, Button, Col, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

// import { FE } from "../utilities/API";

import "../css/auth.css";
import { Link } from "react-router-dom";

class login extends Component {
  render() {
    return (
      <Container fluid>
        <div className="box">
          <Col xl={4} lg={6} md={8}>
            <div className="box-content">
              <Form>
                <h2>Login ...</h2>
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        <FontAwesomeIcon icon={faLock} />
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group>
                  <Link to="/home">
                    <Button variant="outline-primary" type="submit">
                      Login
                    </Button>
                  </Link>
                  &nbsp;
                  <Link to="register">
                    <Button variant="outline-secondary" type="submit">
                      Register
                    </Button>
                  </Link>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </div>
      </Container>
    );
  }
}

export default login;
