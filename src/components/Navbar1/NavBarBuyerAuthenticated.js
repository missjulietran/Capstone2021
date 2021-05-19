import React, { useEffect, useState } from "react";

import styles from "./NavBar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunk } from "../../redux/actions/loginAction";
import logoimage from "../../images/stillgoodglobe.png";


function NavBarBuyerAuthenticated() {
  const history = useHistory();
  const dispatch = useDispatch();

  //Icon to show items in cart
  const [inCart, setInCart] = useState(0);
  var fullState = useSelector((state) => state);
  var cartCount = useSelector((state) => state.cart.items);

  useEffect(() => {
    if (cartCount.length) {
      // eslint-disable-next-line
      cartCount = cartCount.map((item) => item.quantity);
      cartCount = cartCount.reduce((a, b) => {
        return a + b
      });
    }
    setInCart(cartCount);
    console.log(inCart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fullState]);

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(logoutUserThunk);
    history.push("/");
  };

  return (
      <Navbar collapseOnSelect expand="lg" className={styles.navbarmain}>
        <LinkContainer to="/buyers">
          <Navbar.Brand href="#home" className={styles.logo}>
          <img src={(logoimage)} className={styles.logoimg} alt="logo" />
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
            <NavDropdown title="My Account" id="collasible-nav-dropdown">
              <LinkContainer to="/buyers/buyerdashboard">
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

            <LinkContainer to="/buyers/Cart">
              <Nav.Link eventKey={5} href="/buyers/Cart">
                Cart <i class="fas fa-shopping-cart"></i> {inCart}
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavBarBuyerAuthenticated;
