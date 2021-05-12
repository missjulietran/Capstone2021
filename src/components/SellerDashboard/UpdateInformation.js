import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "./sidebar/Sidebar";
import Select from "react-select";
import { Form } from "react-bootstrap";
import { Button, Label, Input, FormGroup } from "reactstrap";
import "./UpdateInformation.css";
import axios from "axios";
import { updateInformationThunk } from "../../redux/actions/formAction";
import dotenv from "dotenv";

dotenv.config()

function UpdateInformation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [district, setDistrict] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const dispatch = useDispatch();
 
  
  // sending passportJwt token to backend
  const user = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API_SERVER}/data/user`, {
        headers: { Authorization: `Bearer ${user}` },
      });
      setName(data[0].name);
      setEmail(data[0].email);
      setAddress(data[0].address);
      setDistrict(data[0].district);
      setPhoneNo(data[0].phone_no);
    };
    fetchData();
  }, [user]);

  // Select District
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

  const handleSubmission = (e) => {
    e.preventDefault();

    dispatch(
      updateInformationThunk({
        name: name,
        email: email,
        password: password,
        address: address,
        district: district,
        phone_no: phoneNo,
      })
    );
  };

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="informationContainer">
        <Form onSubmit={handleSubmission}>
          <FormGroup className="informationForm">
            <Label for="name">Company Name</Label>
            <br />
            <Input
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <Form.Group controlId="formBasicEmail">
            <Label for="email">Company Email</Label>
            <br />
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <FormGroup className="informationForm">
            <Label for="password">Change Password</Label>
            <br />
            <Input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="informationForm">
            <Label for="email">Company Address</Label>
            <br />
            <Input
              type="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="informationForm">
            <Label for="district">Company District</Label>
            <br />
            <Select
              name="district"
              options={options}
              onChange={(e) => {
                setDistrict(e.value);
              }}
            />
          </FormGroup>
          <FormGroup className="informationForm">
            <Label for="phoneNo">Phone Number</Label>
            <br />
            <Input
              type="phone"
              name="phone"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
            />
          </FormGroup>
          <Button
            className="updateBtn"
            color="info"
            type="submit"
            value="submit"
          >
            UPDATE
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateInformation;
