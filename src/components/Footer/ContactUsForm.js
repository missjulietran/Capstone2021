import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import SubmitModal from "./ContactSubmitModal";
// import { Modal, Button } from "react-bootstrap";

const ContactUsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [modalShow, setModalShow] = useState(false);

  const clearContactForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setContent("");
  };

  const sendMail = () => {
    setModalShow(true)
    const mailto =
      `mailto:contact@stillgood.com?subject=${subject}&body=From: ${name}, email: ${email} \n Message: ${content}`;
    window.location.href = mailto;
  }

  return (
    <Form>
      <Form.Label>Name</Form.Label>
      <Form.Control
        name="name"
        type="text"
        value={name}
        size="sm"
        onChange={(e) => setName(e.target.value)}
      />
      <Form.Label>Email Address</Form.Label>
      <Form.Control
        name="email"
        type="text"
        value={email}
        size="sm"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Form.Label>Subject</Form.Label>
      <Form.Control
        name="subject"
        type="text"
        value={subject}
        size="sm"
        onChange={(e) => setSubject(e.target.value)}
      />
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="name"
          type="textarea"
          value={content}
          // size="sm"
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>

      <button
        variant="primary"
        type="button"
        className="btn btn-info mt-2 ml-2"
        onClick={() => sendMail()}
      >
        Submit
      </button>
      <button
        className="btn btn-outline-info mt-2 ml-2"
        type="reset"
        value="reset"
        onClick={clearContactForm}
      >
        Reset
      </button>
      <SubmitModal show={modalShow} onHide={() => setModalShow(false)} />
    </Form>
  );
};

export default ContactUsForm;
