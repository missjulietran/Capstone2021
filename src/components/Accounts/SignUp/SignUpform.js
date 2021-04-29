import React from "react";
import { Formik, Form } from "formik";

export const SignUpform = () => {
  return (
    <Formik>
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          
        </div>
      )}
    </Formik>
  );
};

{
  /* initalValues={{
        businessName: "",
        name: "",
        address: "",
        email: "",
        phone_no: "",
        district: "",
        password: "",
        confirmPassword: "",
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
          
          <Form></Form>
        </div>
      )} */
}
