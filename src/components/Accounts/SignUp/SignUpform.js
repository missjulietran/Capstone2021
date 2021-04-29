import React from "react";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";

export const SignUpForm = () => {
  const validate = Yup.object({
    businessName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    name: Yup.string()
      .max(30, "Must insert First and Last name")
      .required("First and Last name is required"),
    address: Yup.string()
      .required("Address is required"),
    email: Yup.string()
      .email("E-mail is invalid")
      .required("E-mail is required"),
    phone_no: Yup.string()
      .required("Required"),
    district: Yup.string()
      .required("Must be in Hong Kong"),
    password: Yup.string()
      .min(6, "Password must be more than 6 characters")
      .required("Password is Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Password must match")
      .required("Confirm password is required"),
  });
  return (
    <Formik
      initialValues={{
        businessName: "",
        name: "",
        address: "",
        email: "",
        phone_no: "",
        district: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validate}
      onSubmit={values => {
          console.log(values)
      }}
    >
      {(formik) => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          {/* {console.log(formik)} */}
          <Form>
            <TextField label="Business Name" name="businessName" type="text" />
            <TextField label="Company Address" name="address" type="text" />
            <TextField label="District" name="district" type="text" />
            <TextField label="Contact Full Name" name="name" type="text" />
            <TextField label="Business E-mail" name="email" type="text" />
            <TextField label="Phone Number" name="phone_no" type="text" />
            <TextField label="Password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />

            <button className="btn btn-dark mt-3" type="submit">
              Register
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>



  );
};
