import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../css/nasabah.css";
import "../css/global.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArchive,
  faSearch,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

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
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "rgb(33, 37, 41)",
                      }}
                      to="/peminjaman"
                    >
                      <FontAwesomeIcon
                        icon={faArrowAltCircleLeft}
                        className="arrow-back"
                      />
                    </Link>{" "}
                    &nbsp;
                    <FontAwesomeIcon icon={faArchive} /> Peminjaman
                  </h2>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <br />

                      <u>
                        <h3>Data Nasabah</h3>
                      </u>
                    </Col>
                  </Row>
                  <Form.Group as={Row}>
                    <Form.Label column xl={2} lg={2} size="sm">
                      No. KTP
                    </Form.Label>
                    <Col xl={3} lg={5} md={10} sm={10} xs={10}>
                      <Form.Control
                        type="text"
                        placeholder="No. KTP"
                        size="sm"
                      />
                    </Col>
                    <Col xl={2} lg={2} md={2} sm={2} xs={2}>
                      <Button variant="secondary" size="sm">
                        <FontAwesomeIcon icon={faSearch} />
                      </Button>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xl={2} lg={2} size="sm">
                      Nama
                    </Form.Label>
                    <Col xl={4} lg={6} md={11} sm={12} xs={12}>
                      <Form.Control
                        type="text"
                        placeholder="Nama nasabah"
                        size="sm"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xl={2} lg={2} size="sm">
                      No. Telp
                    </Form.Label>
                    <Col xl={4} lg={6} md={11} sm={12} xs={12}>
                      <Form.Control
                        type="text"
                        placeholder="No. Telp"
                        size="sm"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xl={2} lg={2} size="sm">
                      Alamat
                    </Form.Label>
                    <Col xl={4} lg={6} md={11} sm={12} xs={12}>
                      <Form.Control
                        type="text"
                        placeholder="Alamat"
                        size="sm"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xl={2} lg={2} size="sm">
                      Barang
                    </Form.Label>
                    <Col xl={4} lg={6} md={11} sm={12} xs={12}>
                      <Form.Control as="select">
                        <option>Laptop</option>
                        <option>Handphone</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>
                  <Row>
                    <Col>
                      <u>
                        <h3>Spesifikasi Barang</h3>
                      </u>
                    </Col>
                  </Row>
                  <Form.Group as={Row}>
                    <Form.Label column xl={2} lg={2} size="sm">
                      Merk
                    </Form.Label>
                    <Col xl={4} lg={6} md={11} sm={12} xs={12}>
                      <Form.Control type="text" placeholder="Merk" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xl={2} lg={2} size="sm">
                      Spesifikasi
                    </Form.Label>
                    <Col xl={4} lg={6} md={11} sm={12} xs={12}>
                      <Form.Control as="textarea" rows="3" />
                    </Col>
                  </Form.Group>
                  <Row>
                    <Col>
                      <u>
                        <h3>Nilai Barang</h3>
                      </u>
                    </Col>
                  </Row>
                  <Form.Group as={Row}>
                    <Form.Label column xl={2} lg={2} size="sm">
                      Nilai Minimal
                    </Form.Label>
                    <Col xl={4} lg={6} md={11} sm={12} xs={12}>
                      <Form.Control type="number" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xl={2} lg={2} size="sm">
                      Nilai Maksimal
                    </Form.Label>
                    <Col xl={4} lg={6} md={11} sm={12} xs={12}>
                      <Form.Control type="number" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xl={2} lg={2} size="sm">
                      Pinjaman
                    </Form.Label>
                    <Col xl={4} lg={6} md={11} sm={12} xs={12}>
                      <Form.Control type="number" />
                    </Col>
                    <Form.Label column xl={2} lg={2} size="sm">
                      /30 Hari
                    </Form.Label>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xl={2} lg={2} size="sm">
                      Tgl Pengembalian
                    </Form.Label>
                    <Col xl={4} lg={6} md={11} sm={12} xs={12}>
                      <Form.Control
                        type="text"
                        placeholder="Tgl Pengembalian"
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label column xl={2} lg={2} size="sm">
                      Total
                    </Form.Label>
                    <Col xl={4} lg={6} md={11} sm={12} xs={12}>
                      <Form.Control disabled type="text" placeholder="Total" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col xl={2} lg={2}></Col>
                    <Col xl={4} lg={6} md={11} sm={12} xs={12}>
                      <Button variant="primary">Save</Button>
                    </Col>
                  </Form.Group>
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
