// import React from 'react';
// import "./Footer.css"
import "./Footer.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css"

const stickyFooterStyle = {
  backgroundColor: "#ffffff",
  fontSize: "13px",
  color: "black",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  justifyContent: "center",
  padding: "8px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "40px",
  width: "100%",
  wordSpacing: "1.5rem",
  zIndex: "1",
};

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col style={stickyFooterStyle} sm={12}>
            <div className="footer2">
              {" "}
              {/* &copy; Copyright 2021 - 2022 | StillGood{" "} */}
              <Link to="/about">
                About
              </Link> <Link to="/Contact">Contact</Link>{" "}
              <Link to="/FAQ">FAQ</Link>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

// const Footer = () => {
//   return (
//     <div className="footerclass">
//     <footer className="footer">
//     <Link to="/About">About</Link>
//     <Link to="/Contact">Contact</Link>
//     <Link to="/FAQ">FAQ</Link>

//   </footer>
//   </div>
//   );
// };

// export default Footer;
