import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import "../css/nasabah.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive, faSearch } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Componen/navbar";
import Left from "../Componen/left";
import { FE } from "../utilities/API";

class perpanjangan extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container fluid>
          <Row>
            <Col xl={2} lg={3}>
              <Left url={`${FE}/perpanjangan`} trans={"trans"} />
            </Col>
            <Col xl={10} lg={9}>
              <Row>
                <Col>
                  <br />
                  <h2>
                    <FontAwesomeIcon icon={faArchive} /> Perpanjangan
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <br />
                  <Form>
                    <Form.Group>
                      <Form.Label>No .Peminjaman</Form.Label>
                      <Row>
                        <Col xl={6} lg={7} md={11} sm={10} xs={10}>
                          <Form.Control
                            type="text"
                            placeholder="No. Peminjaman"
                          />
                        </Col>
                        <Col xl={6} lg={5} md={1} sm={2} xs={2}>
                          <Button variant="secondary">
                            <FontAwesomeIcon icon={faSearch} />
                          </Button>
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Nasabah</Form.Label>
                      <Row>
                        <Col xl={7} lg={9}>
                          <Form.Control
                            type="text"
                            placeholder="Nasabah"
                            disabled
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Tgl Pinjam</Form.Label>
                      <Row>
                        <Col xl={7} lg={9}>
                          <Row>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder="Tgl Pinjam"
                                disabled
                              />
                            </Col>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder="Deadline"
                                disabled
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Penambahan Hari</Form.Label>
                      <Row>
                        <Col xl={7} lg={9}>
                          <Row>
                            <Col>
                              <Form.Control as="select">
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                              </Form.Control>
                            </Col>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder="Deadline"
                                disabled
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Keterangan</Form.Label>
                      <Row>
                        <Col xl={7} lg={9}>
                          <Form.Control as="textarea" rows="3" />
                        </Col>
                      </Row>
                    </Form.Group>
                    <Row>
                      <Col xl={7} lg={9}>
                        <div
                          style={{
                            float: "right",
                          }}
                        >
                          <Button variant="primary">Save</Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
        </Container>
      </div>
    );
  }
}

export default perpanjangan;
