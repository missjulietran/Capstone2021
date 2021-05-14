import React from "react";
import Container from "react-bootstrap/Container";
import "../../App.css";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Thankyou = () => {
  //Redirect to Login Page
  let history = useHistory();

  return (
    <Container fluid="sm" className="thankyoudiv">
      <div className="thankyouinside">
        <div>
          <i style={{ color: "green" }} className="fas fa-check fa-3x"></i>
        </div>
        <div>
          <h2>Thank You for Signing Up!</h2>
        </div>
        <div>
          <p>
            We will review your application and get back to you in a few days.
            If you have any questions, please contact us on the{" "}
            <Button
              onClick={() => {
                history.push("/ishome/Contact");
              }}
            >
              contact page.
            </Button>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Thankyou;
