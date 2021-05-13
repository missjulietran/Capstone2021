import { Nav } from "react-bootstrap";
import React, { useState } from "react";
import "./NavBar2.css";
import { LinkContainer } from "react-router-bootstrap";

function SellerNavBar2() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav defaultActiveKey="/seller" as="ul">
        <Nav.Item as="li">
          <LinkContainer to="/seller">
            <Nav.Link
              href="/"
              activeClassName="active"
              className="nav-links2"
              onClick={handleClick}
            >
              Events
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <LinkContainer to="/seller/Categories/Asian">
            <Nav.Link
              activeClassName="active"
              className="nav-links2"
              onClick={handleClick}
            >
              Categories
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <LinkContainer to="/seller/Brands/NotLush">
            <Nav.Link
              //   eventKey="/brands"
              activeClassName="active"
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
export default SellerNavBar2;
