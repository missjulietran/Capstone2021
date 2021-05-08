import { Nav } from "react-bootstrap";
import React, { useState } from "react";
import "./NavBar2.css";
import { LinkContainer } from "react-router-bootstrap";

function NavBar2() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <LinkContainer to="/">
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
          <LinkContainer to="/Categories">
            <Nav.Link
              exact
              to="/categories"
              activeClassName="active"
              className="nav-links2"
              onClick={handleClick}
            >
              Categories
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <LinkContainer to="/Brands">
            <Nav.Link
              eventKey="/brands"
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
export default NavBar2;
