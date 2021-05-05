import React, { useState} from "react";
// import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
// import axios from "axios";
// import { useAccordionToggle } from "react-bootstrap";
// import { useParams } from "react-router-dom";
import { handleSignUpThunk } from "../../../redux/actions/formAction";
import Select from "react-select";

// BUYER SIGN UP FORM***
function SignUpFormSeller() {
  const [buyer, setBuyer]=useState(false)
  const [seller, setSeller]=useState(true)
  const [businessName, setBusinessName] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [certOfInfo, setCertOfInfo] = useState(null);
  const [businessCert, setBusinessCert] = useState("");

  const dispatch = useDispatch();


  //Select district
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

  const handleFileChoice=(e)=>{
    e.preventDefault()
    console.log('okays')
    console.log(e.target.files[0].name)
    setCertOfInfo(e.target.files[0].name)
    setBusinessCert(e.target.files[0].name)
  }


  //submit the form
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("sign up form submitted");
console.log(certOfInfo)
    //dump file into s3 or FS

    
    console.log({
      buyer:buyer,
      seller:seller,
      businessName: businessName,
      district: district,
      address: address,
      name: name,
      email: email,
      phone_no: phone,
      password: password,
      certFile: certOfInfo,
      businessCert: businessCert,
    })

    dispatch(
      handleSignUpThunk({
        buyer:buyer,
        seller:seller,
        businessName: businessName,
        district: district,
        address: address,
        name: name,
        email: email,
        phone_no: phone,
        password: password,
        certFile: certOfInfo,
        businessCert: businessCert,
      })
    )
    }

    return (
      <>
        <h1>Seller</h1>
        <Form size="sm" id='form' onSubmit={handleSubmission}>
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
              name="district"
              options={options}
              onChange={(e) => {
                setDistrict(e.value);
              }}
            />
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
            value={name}
            onChange={(e)=>setName(e.target.value)}
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
            label={certOfInfo==null? "Certificate of Incorporation":certOfInfo}
            custom
            // id="certFile"
            key='ci'
            name="certFile"
            onChange={handleFileChoice}
          />
          <Form.File
            size="sm"
            label="Business Registration Certificate"
            type="file"
            key='bc'
            // id="businessCert"
            name="businessCert"
            value={businessCert}
            onChange={(e) => console.log(e.target.files[0])}
            custom
          />
        
        <button className="btn btn-dark mt-3" type="submit" value="submit">
          Register
        </button>
        <button className="btn btn-danger mt-3 ml-3" type="reset" value="reset">
          Reset
        </button>
        </Form>
      </>
    );
  };


export default SignUpFormSeller;
