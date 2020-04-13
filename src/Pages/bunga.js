import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../css/nasabah.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Componen/navbar";
import Left from "../Componen/left";

import { FE } from "../utilities/API";

class bunga extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container fluid>
          <Row>
            <Col sm={2}>
              <Left url={`${FE}/bunga`} dataMaster={"dataMaster"} />
            </Col>
            <Col sm={10}>
              <Row>
                <Col>
                  <br />
                  <h2>
                    <FontAwesomeIcon icon={faBriefcase} /> Bunga
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form>
                    <div>
                      <Form.Group as={Row}>
                        <Form.Label column sm={1}>
                          Bunga %
                        </Form.Label>
                        <Col column sm={2}>
                          <Form.Control type="number" placeholder="Bunga" />
                        </Col>
                      </Form.Group>
                    </div>
                    <Button variant="primary">Save</Button>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default bunga;
