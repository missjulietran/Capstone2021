import React from "react";
import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import styles from "./NavBar.module.css";
// import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import NavBarNotAuthenticated from "./NavBarNotAuthenticated";
import NavBarBuyerAuthenticated from "./NavBarBuyerAuthenticated";
function NavBar() {
  // const [click, setClick] = useState(false);
  const auth = useSelector((state) => state.login);
  const { isAuthenticated } = auth;
  // // const handleClick = () => setClick(!click);
  return (
    <>
      {isAuthenticated ? (
        <NavBarBuyerAuthenticated />
      ) : (
        <NavBarNotAuthenticated />
      )}
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
