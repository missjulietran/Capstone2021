import React from "react";
import { Modal, Button } from "react-bootstrap";

function ContactSubmitModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h4>Contact Form Submitted</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <b>Thank you for contacting us!</b>
        <p>
          <br />
          We appreciate that you've taken the time to write to us. <br />We'll get back to you very soon.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactSubmitModal;
