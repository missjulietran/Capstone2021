import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavBarNotAuthenticated() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
        <LinkContainer to="/">
          <Navbar.Brand href="#home" className={styles.logo}>
            Eco Store
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className={styles.right}>
            <LinkContainer to="/GiveBack">
              <Nav.Link eventKey={2} href="/GiveBack">
                Give Back
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/BuyerSeller">
              <Nav.Link eventKey={3} href="/BuyerSeller">
                Log In
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/SignUp">
              <Nav.Link eventKey={4} href="/SignUp">
                Sign Up
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBarNotAuthenticated;
