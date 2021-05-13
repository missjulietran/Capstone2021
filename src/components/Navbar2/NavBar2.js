import { Nav } from "react-bootstrap";
import React, { useState } from "react";
import "./NavBar2.css";
import { LinkContainer } from "react-router-bootstrap";
import {useHistory} from "react-router-dom";


function NavBar2() {
  const [click, setClick] = useState(false);
  const history = useHistory();

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
          <LinkContainer to="/Categories/Asian">
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
          <LinkContainer to="/Brands/NotLush">
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
      <i class="fas fa-arrow-circle-left fa-2x"onClick={() => history.goBack()} style={{margin:'10px'}}></i>
    </>
  );
}
export default NavBar2;