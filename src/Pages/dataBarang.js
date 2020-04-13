import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import "../css/nasabah.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../Componen/navbar";
import Left from "../Componen/left";
import { FE } from "../utilities/API";

class dataBarang extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container fluid>
          <Row>
            <Col xl={2} lg={3}>
              <Left url={`${FE}/barang`} dataMaster={"dataMaster"} />
            </Col>
            <Col xl={10} lg={9}>
              <Row>
                <Col>
                  <br />
                  <h2>
                    <FontAwesomeIcon icon={faBriefcase} /> Data Barang
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div>{/* <AddNasabah /> */}</div>
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
                          <th>No. Peminjaman</th>
                          <th>Nasabah</th>
                          <th>Nama barang</th>
                          <th>Jenis</th>
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

export default dataBarang;
