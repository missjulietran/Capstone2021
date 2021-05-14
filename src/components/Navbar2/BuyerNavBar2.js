import { Nav } from "react-bootstrap";
import React, { useState } from "react";
import "./NavBar2.css";
import { LinkContainer } from "react-router-bootstrap";

function BuyerNavBar2() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav defaultActiveKey="/buyers" as="ul">
        <Nav.Item as="li">
          <LinkContainer to="/buyers">
            <Nav.Link
              href="/"
              activeclassname="active"
              className="nav-links2"
              onClick={handleClick}
            >
              Events
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <LinkContainer to="/buyers/Categories/Asian">
            <Nav.Link
              activeclassname="active"
              className="nav-links2"
              onClick={handleClick}
            >
              Categories
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <LinkContainer to="/buyers/Brands/NotLush">
            <Nav.Link
              //   eventKey="/brands"
              activeclassname="active"
              className="nav-links2"
              onClick={handleClick}
            >
              Brands
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </>
  );
}
export default BuyerNavBar2;
