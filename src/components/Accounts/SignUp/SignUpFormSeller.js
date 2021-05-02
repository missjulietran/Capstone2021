import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const SignUpFormSeller = () => {
  return (
    <>
      <h1>Seller</h1>
      <Form>
        <Form.Label>Business Name</Form.Label>
        <Form.Control
          size="sm"
          required
          type="text"
          placeholder=""
          defaultValue=""
        />
        <Form.Label>Country</Form.Label>
        <Form.Control size="sm" placeholder="Hong Kong" disabled />
        <Form.Label>District</Form.Label>
        <Form.Control size="sm" as="select" custom>
          <option>Central and Western</option>
          <option>Eastern</option>
          <option>Western</option>
          <option>Wan Chai</option>
          <option>Kowloon City</option>
          <option>Kwun Tong</option>
          <option>Sham Shui Po</option>
          <option>Wong Tai Sin</option>
          <option>Yau Tsim Mong</option>
          <option>New Territories</option>
          <option>Islands</option>
          <option>Kwai Tsing</option>
          <option>North</option>
          <option>Sai Kung</option>
          <option>Sha Tin</option>
          <option>Tai Po</option>
          <option>Tsuen Wan</option>
          <option>Tuen Mun</option>
          <option>Yuen Long</option>
        </Form.Control>
        {/* <Form.Control required type="text" placeholder="" defaultValue="" /> */}
        <Form.Label>Company Address</Form.Label>
        <Form.Control size="sm" placeholder="Floor, Block, Building Name" />
        <Form.Label>Contact Full Name</Form.Label>
        <Form.Control
          size="sm"
          required
          type="text"
          placeholder="First Name, Last Name"
        />
        <Form.Label>Contact Phone Number</Form.Label>
        <Form.Control size="sm" required type="text" />
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control size="sm" required type="email" placeholder="" />
        </Form.Group>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          size="sm"
          type="password"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
        />
        <Form.Text id="passwordHelpBlock" muted>
          Your password must be 8-20 characters long, contain letters and
          numbers, and must not contain spaces, or special characters.
        </Form.Text>
        <Form.Label>Please upload the following Documentation</Form.Label>
        <Form.File
          size="sm"
          id="custom-file"
          label="Certificate of Incorporation"
          custom
        />
        <Form.File
          size="sm"
          id="custom-file"
          label="Business Registration Certificate"
          custom
        />
      </Form>
      <button className="btn btn-dark mt-3" type="submit">
        Register
      </button>
      <button className="btn btn-danger mt-3 ml-3" type="reset">
        Reset
      </button>
    </>
  );
};

export default SignUpFormSeller;
