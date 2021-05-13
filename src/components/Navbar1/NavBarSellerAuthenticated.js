import React from "react";
import styles from "./NavBar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "../../redux/actions/loginAction";

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
    <>
      <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
        <LinkContainer to="/seller">
          <Navbar.Brand href="#home" className={styles.logo}>
            Still Good
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>

          <Nav className={styles.right}>
            <NavDropdown title="My Account" id="collasible-nav-dropdown">
              <LinkContainer to="/seller/sellerdashboard">
                <NavDropdown.Item>
                  Account Settings <i class="fas fa-cog pull-right"></i>
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/">
                <NavDropdown.Item onClick={logout}>
                  Logout <i class="fas fa-sign-out-alt pull-right"></i>
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
    </>
  );
}

export default NavBarSellerAuthenticated;
