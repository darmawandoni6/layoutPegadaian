import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../css/nasabah.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Componen/navbar";
import Left from "../Componen/left";

import { FE } from "../utilities/API";

class gantiFoto extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container fluid>
          <Row>
            <Col xl={2} lg={3}>
              <Left url={`${FE}/ganti-foto`} gantiFoto={"gantiFoto"} />
            </Col>
            <Col xl={2} lg={3}>
              <div className="conten-center">
                <div className="box-change">
                  <h3>
                    <FontAwesomeIcon icon={faImage} /> Ganti Foto
                  </h3>
                  <Form>
                    <Form.Group>
                      <Form.Control type="file" />
                    </Form.Group>
                    <Button variant="primary" style={{ width: "100%" }}>
                      Save
                    </Button>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default gantiFoto;
