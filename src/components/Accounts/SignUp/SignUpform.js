import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import axios from "axios";
// import { useAccordionToggle } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { handleSignUpThunk } from "../../../redux/actions/formAction";

function SignUpForm() {
  const [businessName, setBusinessName] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [certOfInfo, setCertOfInfo] = useState("");
  const [businessCert, setBusinessCert] = useState("");

  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:8080/signup/${userId}`);
      setBusinessName(data[0].businessName)
      setName(data[0].name);
      setEmail(data[0].email);
      setAddress(data[0].address);
      setDistrict(data[0].district);
      setPhone(data[0].phone_no);
      setPassword(data[0].password);
      setCertOfInfo(data[0].certfile)
      setBusinessCert(data[0].businessregfile);

    };
    fetchData();
  }, [userId]);


  //select district
  const options = [
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
  ];


  //submit the form
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("sign up form submitted");

    const data = new FormData();
    data.append("file", certOfInfo);
    data.append("file", businessCert);
    dispatch(
      handleSignUpThunk(data, {
        id: userId,
        businessName: businessName,
        district: district,
        address: address,
        name: name,
        email: email,
        phone_no: phone,
        password: password,
      })
    )

    return (
      <>
        <h1>Buyer</h1>
        <Form size="sm" onSubmit={handleSubmission}>
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
          <Form.Control
            as="select"
            size="sm"
            custom
            options={options}
            id="district"
            value={district}
            onChange={(e) => setDistrict}
          >
            {/* <option>Central and Western</option>
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
          <option>Yuen Long</option> */}
          </Form.Control>
          {/* <Form.Control required type="text" placeholder="" defaultValue="" /> */}
          <Form.Label>Company Address</Form.Label>
          <Form.Control
            size="sm"
            placeholder="Floor, Block, Building Name"
            id="address"
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
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            name="password"
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, or special characters.
          </Form.Text>
          <Form.Label>Please upload the following Documentation in PDF</Form.Label>
          <Form.File
            size="sm"
            type="file"
            label="Certificate of Incorporation"
            custom
            id="certFile"
            name="certFile"
            value={certOfInfo}
            onChange={(e)=> setBusinessCert(e.target.value)}
          />
          <Form.File
            size="sm"
            label="Business Registration Certificate"
            type="file"
            id="businessCert"
            name="businessCert"
            value={businessCert}
            onChange={(e) => setBusinessCert(e.target.value)}
            custom
          />
        </Form>
        <button className="btn btn-dark mt-3" type="submit" value="submit">
          Register
        </button>
        <button className="btn btn-danger mt-3 ml-3" type="reset" value="reset">
          Reset
        </button>
      </>
    );
  };
};
export default SignUpForm;
