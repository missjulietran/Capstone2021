
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function SubmitModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact Form Submitted
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Thank you for contacting us.</h4>
        <p>
          We appreciate that you've taken the time to write to us. We'll get back to you very soon.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <SubmitModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default SubmitModal;
