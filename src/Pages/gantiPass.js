import React, { Component } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Componen/navbar";
import Left from "../Componen/left";

import { FE } from "../utilities/API";

class gantiPass extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container fluid>
          <Row>
            <Col xl={2} lg={3}>
              <Left url={`${FE}/ganti-pass`} gantiPass={"gantiPass"} />
            </Col>
            <Col xl={10} lg={9}>
              <div className="conten-center">
                <Col xl={5} lg={8}>
                  <h3>
                    <FontAwesomeIcon icon={faLock} /> Ganti Password
                  </h3>
                  <Form>
                    <Form.Group>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faLock} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="password"
                          placeholder="Password Lama"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faLock} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="password"
                          placeholder="Password Baru"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <FontAwesomeIcon icon={faLock} />
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="password"
                          placeholder="ketik Ulang Password Baru"
                        />
                      </InputGroup>
                    </Form.Group>
                    <Button variant="primary" style={{ width: "100%" }}>
                      Save
                    </Button>
                  </Form>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default gantiPass;
