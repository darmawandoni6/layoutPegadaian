import React, { Component } from "react";
import { Container, Row, Col, Button, Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/nasabah.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Componen/navbar";
import Left from "../Componen/left";
import { FE } from "../utilities/API";
class peminjaman extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container fluid>
          <Row>
            <Col xl={2} lg={3}>
              <Left url={`${FE}/peminjaman`} trans={"trans"} />
            </Col>
            <Col xl={10} lg={9}>
              <Row>
                <Col>
                  <br />
                  <h2>
                    <FontAwesomeIcon icon={faArchive} /> Peminjaman
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Link to="/add-peminjaman">
                    <Button variant="primary">+ Add Peminjaman</Button>
                  </Link>
                </Col>
              </Row>

              <Row>
                <Col>
                  <br />
                  <div style={{ width: 500, float: "right" }}>
                    <Form.Group as={Row}>
                      <Form.Label column sm={2}>
                        Filter
                      </Form.Label>
                      <Col sm={5}>
                        <Form.Control type="date" />
                      </Col>
                      <Col sm={5}>
                        <Form.Control type="date" />
                      </Col>
                    </Form.Group>
                  </div>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th style={{ width: 40 }}>No.</th>
                        <th>No. Peminjaman</th>
                        <th>Tanggal</th>
                        <th>Nama Nasabah</th>
                        <th>Pinjaman</th>
                        <th>Jatuh Tempo</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Otto</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default peminjaman;
