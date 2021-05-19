import React from "react";
// import { useSelector } from "react-redux";
import styles from "./NavBar.module.css";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logoimage from "../../images/stillgoodglobe.png"

function NavBar() {
  // const [click, setClick] = useState(false);
  // const auth = useSelector((state) => state.login);
  // const { isAuthenticated, isBuyer } = auth;

  return (
      <Navbar collapseOnSelect expand="lg" className={styles.navbarmain}>
        <LinkContainer to="/">
          <Navbar.Brand href="#home" className={styles.logo}><img src={(logoimage)} className={styles.logoimg} alt="logo" />
            {/* Still Good <i className="fas fa-seedling"></i> */}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className={styles.right}>
            <LinkContainer to="/ishome/GiveBack">
              <Nav.Link className={styles.rightgiveback} eventKey={2} href="/GiveBack">
                Give Back
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ishome/BuyerSeller">
              <Nav.Link className={styles.right} eventKey={3} href="/BuyerSeller">
                Log In
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ishome/SignUp">
              <Nav.Link className={styles.right} eventKey={4} href="/SignUp">
                Sign Up
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default NavBar;
