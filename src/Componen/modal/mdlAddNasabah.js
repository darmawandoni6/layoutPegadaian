import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

class mdlNasabah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleModal = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleModal}>
          + Add Nasabah
        </Button>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.handleModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Nasabah
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>No. KTP</Form.Label>
                <Form.Control type="text" placeholder="No. KTP" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Nama Nasabah</Form.Label>
                <Form.Control type="text" placeholder="Nama Nasabah" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Alamat</Form.Label>
                <Form.Control type="text" placeholder="Alamat" />
              </Form.Group>
              <Form.Group>
                <Form.Label>No. Telp</Form.Label>
                <Form.Control type="text" placeholder="No. Telp" />
              </Form.Group>
              <Form.Group className="float-right">
                <Button variant="success">Save</Button> &nbsp;
                <Button variant="warning" onClick={this.handleModal}>
                  Close
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default mdlNasabah;
