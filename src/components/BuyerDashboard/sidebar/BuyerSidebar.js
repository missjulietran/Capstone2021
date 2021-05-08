import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import "./BuyerSidebar.css";

const BuyerSidebar = () => {
  return (
    <div className="buyersidebar">
      <LinkContainer to="/buyerdashboard">
        <Nav.Link className="buyerdashBoardLink">Your Information</Nav.Link>
      </LinkContainer>
      <LinkContainer to="updatebuyer">
        <Nav.Link className="buyerdashBoardLink">Update Information</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/yourorder">
        <Nav.Link className="buyerdashBoardLink">Your Orders</Nav.Link>
      </LinkContainer>
    </div>
  );
};

export default BuyerSidebar;
