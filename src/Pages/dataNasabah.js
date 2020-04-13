import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "../css/nasabah.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faSearch,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Componen/navbar";
import Left from "../Componen/left";
import AddNasabah from "../Componen/modal/mdlAddNasabah";

import { FE } from "../utilities/API";
class DataUser extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container fluid>
          <Row>
            <Col xl={2} lg={3}>
              <Left url={`${FE}/nasabah`} dataMaster={"dataMaster"} />
            </Col>
            <Col xl={10} lg={9}>
              <Row>
                <Col>
                  <br />
                  <h2>
                    <FontAwesomeIcon icon={faBriefcase} /> Data Nasabah
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>
                    <AddNasabah />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <br />
                  <div className="dt-table">
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>
                          <th style={{ width: 40 }}>No.</th>
                          <th>No. KTP</th>
                          <th>Nama</th>
                          <th>Alamat</th>
                          <th>Telepon</th>
                          <th>Status</th>
                          <th style={{ textAlign: "center" }}>Action</th>
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
                          <td className="action">
                            <Row className="div-action">
                              <Col>
                                <FontAwesomeIcon
                                  icon={faSearch}
                                  style={{ color: "green", cursor: "pointer" }}
                                />
                              </Col>
                              <Col>
                                <FontAwesomeIcon
                                  icon={faEdit}
                                  style={{ color: "blue", cursor: "pointer" }}
                                />
                              </Col>
                              <Col>
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  style={{ color: "red", cursor: "pointer" }}
                                />
                              </Col>
                            </Row>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default DataUser;
