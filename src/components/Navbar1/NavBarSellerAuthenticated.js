import React from "react";
import styles from "./NavBar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../../redux/actions/loginAction";
import logoimage from "../../images/stillgoodglobe.png";

function NavBarSellerAuthenticated() {
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(logoutUserThunk);
    history.push("/");
  };

  return (
      <Navbar collapseOnSelect expand="lg" className={styles.navbarSeller}>
        <LinkContainer to="/seller">
          <Navbar.Brand href="#home" className={styles.logo}>
          <img src={(logoimage)} className={styles.logoimg} alt="logo" />
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>

          <Nav className={styles.right}>
            <NavDropdown title="My Account" id="collasible-nav-dropdown">
              <LinkContainer to="/seller/sellerdashboard">
                <NavDropdown.Item>
                  Account Settings <i className="fas fa-cog pull-right"></i>
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/">
                <NavDropdown.Item onClick={logout}>
                  Logout <i className="fas fa-sign-out-alt pull-right"></i>
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/ishome/GiveBack">
              <Nav.Link eventKey={2} href="/ishome/GiveBack">
                Give Back
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavBarSellerAuthenticated;
