import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import axios from "axios";
import { useHistory } from "react-router-dom";
import dotenv from "dotenv";

dotenv.config()

// BUYER SIGN UP FORM***
function SignUpFormSeller() {
  const [buyer] = useState(false);
  const [seller] = useState(true);
  const [businessName, setBusinessName] = useState("");
  const [district, setDistrict] = useState([
    { value: "Central and Western", label: "Central and Western" },
    { value: "Eastern", label: "Eastern" },
    { value: "Southern", label: "Southern" },
    { value: "Wan Chai", label: "Wan Chai" },
    { value: "Sham Shui Po", label: "Sham Shui Po" },
    { value: "Kowloon City", label: "Kowloon City" },
    { value: "Kwun Tong", label: "Kwun Tong" },
    { value: "Wong Tai Sin", label: "Wong Tai Sin" },
    { value: "Yau Tsim Mong", label: "Yau Tsim Mong" },
    { value: "Island", label: "Island" },
    { value: "Kwai Tsing", label: "Kwai Tsing" },
    { value: "North", label: "North" },
    { value: "Sai Kung", label: "Sai Kung" },
    { value: "Sha Tin", label: "Sha Tin" },
    { value: "Tai Po", label: "Tai Po" },
    { value: "Tsuen Wan", label: "Tsuen Wan" },
    { value: "Tuen Mun", label: "Tuen Mun" },
    { value: "Yuen Long", label: "Yuen Long" },
  ]);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [certOfInfo, setCertOfInfo] = useState(null);
  const [businessCert, setBusinessCert] = useState(null);
  const [realcertOfInfo, setrealCertOfInfo] = useState(null);
  const [realbusinessCert, setrealBusinessCert] = useState(null);

  //Reset button to clear all states
  const clearState = () => {
    setBusinessName("");
    setDistrict();
    setAddress("");
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
    setCertOfInfo(null);
    setBusinessCert(null);
    setrealCertOfInfo(null);
    setrealBusinessCert(null);
  };

  

  //Redirect to Login Page
  let history = useHistory();


  const handleCertOfInfoFile = (e) => {
    e.preventDefault();
    // console.log("okays");
    // console.log(e.target.files[0].name);
    console.log(realcertOfInfo)
    console.log(realbusinessCert)
    setCertOfInfo(e.target.files[0].name);
    setrealCertOfInfo(e.target.files[0]);
  };

  const handleBusinessCertFile = (e) => {
    e.preventDefault();
    console.log("businesscert");
    setBusinessCert(e.target.files[0].name);
    setrealBusinessCert(e.target.files[0]);
  };

  //submit the form
  const handleSubmission = (e) => {
    e.preventDefault();
    let newFormData = new FormData(e.target);
    newFormData.append("file", certOfInfo);
    newFormData.append("file1", businessCert);
    newFormData.append("buyer", buyer);
    newFormData.append("seller", seller);
    console.log(newFormData.getAll("file"));
    console.log(newFormData.getAll("name"));

    axios
      .post(`${process.env.REACT_APP_API_SERVER}/signup`, newFormData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then(function (res) {
        console.log(res);
        history.push("/Thankyou");
      })
      .catch(function (err) {
        console.log(err);
      });
    console.log("seller sign up submitted");
  };

  return (
    <>
      <h1>Seller</h1>
      <Form size="sm" id="form" onSubmit={handleSubmission}>
        <Form.Label>Business Name</Form.Label>
        <Form.Control
          size="sm"
          required
          type="text"
          placeholder=""
          defaultValue=""
          name="businessName"
          id="businessName"
          value={businessName}
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <Form.Label>Country</Form.Label>
        <Form.Control size="sm" placeholder="Hong Kong" disabled />
        <Form.Label>District</Form.Label>
        <Select
          size="sm"
          name="district"
          options={district}
          onChange={(e) => {
            setDistrict(e.value);
          }}
        />
        <Form.Label>Company Address</Form.Label>
        <Form.Control
          size="sm"
          placeholder="Flat, Floor, Block, Building Name"
          id="address"
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <Form.Label>Contact Full Name</Form.Label>
        <Form.Control
          size="sm"
          required
          type="text"
          name="name"
          id="name"
          placeholder="First Name, Last Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Label>Contact Phone Number</Form.Label>
        <Form.Control
          size="sm"
          required
          id="phone_no"
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Form.Group size="sm" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            size="sm"
            required
            type="email"
            placeholder=""
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
          size="sm"
          type="password"
          aria-describedby="passwordHelpBlock"
          name="password"
          id="password"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Text id="passwordHelpBlock" muted>
          Must contain at least one number and one uppercase and lowercase
          letter, and at least 8 or more characters.
        </Form.Text>
        <Form.Label>
          Please upload the following Documentation in PDF
        </Form.Label>

        <Form.File
          size="sm"
          type="file"
          label={
            certOfInfo == null ? "Certificate of Incorporation" : certOfInfo
          }
          custom
          key="ci"
          name="certFile"
          onChange={handleCertOfInfoFile}
          accept=".pdf"
        />
        <Form.File
          size="sm"
          label={
            businessCert == null
              ? "Business Registration Certificate"
              : businessCert
          }
          type="file"
          key="bc"
          name="businessCert"
          accept=".pdf"
          onChange={handleBusinessCertFile}
          custom
        />

        <button
          className="btn btn-dark mt-3"
          type="submit"
          value="submit"
          // onClick={() => {
          //   history.push("/Thankyou");
          // }}
        >
          Register
        </button>
        <button
          className="btn btn-danger mt-3 ml-3"
          type="reset"
          value="reset"
          onClick={clearState}
        >
          Reset
        </button>
      </Form>
    </>
  );
}

export default SignUpFormSeller;
