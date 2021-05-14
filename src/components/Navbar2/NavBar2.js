import { Nav } from "react-bootstrap";
import React, { useState } from "react";
import "./NavBar2.css";
import { LinkContainer } from "react-router-bootstrap";
// import {useHistory} from "react-router-dom";


function NavBar2() {
  const [click, setClick] = useState(false);
  // const history = useHistory();

  const handleClick = () => setClick(!click);
  return (
    <>
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <LinkContainer to="/">
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
          <LinkContainer to="/ishome/Categories/Asian">
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
          <LinkContainer to="/ishome/Brands/NotLush">
            <Nav.Link
              eventKey="/brands"
              activeclassname="active"
              className="nav-links2"
              onClick={handleClick}
            >
              Brands
            </Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
      {/* <i className="fas fa-arrow-circle-left fa-2x"onClick={() => history.goBack()} style={{margin:'10px'}}></i> */}
    </>
  );
}
export default NavBar2;