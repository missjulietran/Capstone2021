import React from "react";
// import { useSelector } from "react-redux";
import styles from "./NavBar.module.css";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  // const [click, setClick] = useState(false);
  // const auth = useSelector((state) => state.login);
  // const { isAuthenticated, isBuyer } = auth;

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={styles.navbarmain}>
        <LinkContainer to="/">
          <Navbar.Brand href="#home" className={styles.logo}>
            Still Good <i className="fas fa-seedling"></i>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className={styles.right}>
            <LinkContainer to="/ishome/GiveBack">
              <Nav.Link eventKey={2} href="/GiveBack">
                Give Back
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ishome/BuyerSeller">
              <Nav.Link eventKey={3} href="/BuyerSeller">
                Log In
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ishome/SignUp">
              <Nav.Link eventKey={4} href="/SignUp">
                Sign Up
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* {isAuthenticated && isBuyer ? (
        <NavBarBuyerAuthenticated />
      ) : isAuthenticated && isBuyer === false ? (
        <NavBarSellerAuthenticated />
      ) : (
        <NavBarNotAuthenticated />
      )} */}
    </>
  );
}

export default NavBar;
