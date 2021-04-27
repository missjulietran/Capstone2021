import React from "react";
// import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  // const [click, setClick] = useState(false);

  // // const handleClick = () => setClick(!click);
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
            <NavDropdown title="My Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/Account">
                Account Settings <i class="fas fa-cog pull-right"></i>
              </NavDropdown.Item>
              <LinkContainer to="/">
                <NavDropdown.Item href="/">
                  Logout <i class="fas fa-sign-out-alt pull-right"></i>
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <LinkContainer to="/LogIn">
              <Nav.Link eventKey={2} href="/LogIn">
                Log In
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/SignUp">
              <Nav.Link eventKey={2} href="/SignUp">
                Sign Up
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Cart">
              <Nav.Link eventKey={3} href="/Cart">
                Cart <i class="fas fa-shopping-cart"></i>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            ECOSTORE
            
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/cart"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cart <i class="fas fa-shopping-cart"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default NavBar;
