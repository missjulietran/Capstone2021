import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav.Item className="sideItems">
        <LinkContainer to="/sellerdashboard">
          <Nav.Link className="dashBoardLink">Dashboard</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item className="sideItems">
        <LinkContainer to="/informationupdate">
          <Nav.Link className="dashBoardLink">Information</Nav.Link>
        </LinkContainer>
      </Nav.Item>{" "}
      <Nav.Item className="sideItems">
        <LinkContainer to="/sellerproduct">
          <Nav.Link className="dashBoardLink">Inventory</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item className="sideItems">
        <LinkContainer to="/inventoryupload">
          <Nav.Link className="dashBoardLink">Add Product</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item className="sideItems">
        <LinkContainer to="/eventupload">
          <Nav.Link className="dashBoardLink">Add Event</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </div>
  );
};

export default Sidebar;
