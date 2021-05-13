import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunk } from "../../redux/actions/loginAction";

function NavBarBuyerAuthenticated() {
  const history = useHistory();
  const dispatch = useDispatch();

  //Icon to show items in cart
  const [inCart, setInCart]=useState(0)
  var fullState = useSelector(state=>state)
  var cartCount= useSelector(state=>state.cart.items);
  
  useEffect(()=>{
  if(cartCount.length){
    cartCount=cartCount.map(item=>item.quantity)
    cartCount=cartCount.reduce((a,b)=>{
      return a+b
    })
  }
    setInCart(cartCount)
  },[fullState])


  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    dispatch(logoutUserThunk);
    history.push("/");
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className={styles.navbar2}>
        <LinkContainer to="/">
          <Navbar.Brand href="#home" className={styles.logo}>
            Still Good
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
            <NavDropdown title="My Account" id="collasible-nav-dropdown">
              <LinkContainer to="/buyerdashboard">
                <NavDropdown.Item>
                  Account Settings <i class="fas fa-cog pull-right"></i>
                </NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/home">
                <NavDropdown.Item onClick={logout}>
                  Logout <i class="fas fa-sign-out-alt pull-right"></i>
                </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to="/Cart">
              <Nav.Link eventKey={5} href="/Cart">
                Cart <i class="fas fa-shopping-cart"></i> {inCart}
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBarBuyerAuthenticated;
