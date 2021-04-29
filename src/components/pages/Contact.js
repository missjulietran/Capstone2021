import React from "react";
// import Form from "react-bootstrap/Form";
// import Container from "react-bootstrap/Container";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import ContactUsForm from "../Footer/ContactUsForm";
import "../../App.css";

export const Contact = () => {
  return (
      <div className="contactDiv">
          <div><h1 className="text-center">Contact Us</h1></div>
{/* <div className="text-center">
<h2><i class="fas fa-phone-volume"></i>
        Give us a Call @ +852 8888-8888

        or

        <i class="fas fa-envelope"></i>
        Send us an e-mail </h2>

</div> */}


    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
        <h2><i size={3} class="fas fa-phone-volume"></i>
        Give us a Call at +852 8888-8888

        

        <i class="fas fa-envelope"></i>
        Send us an e-mail </h2>
        </div>
        <div className="col-md-7 my-auto">
            We'd love to hear from you, please drop us a line if you've any query.
          <ContactUsForm />
        </div>
      </div>
    </div>
    </div>
  );
};
