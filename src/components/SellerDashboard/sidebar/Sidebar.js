import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Sidebar.css";

const Sidebar = () => {
  const [click, setClick] = useState(false);

  const onClick = () => setClick(!click);
  return (
    <div className="sidebar">
      <Nav.Item className="sideItems">
        <LinkContainer to="/sellerdashboard">
          <Nav.Link className="dashBoardLink">Dashboard</Nav.Link>
        </LinkContainer>
        {/* <Nav.Link
          href="/SellerDashboard"
          
          onClick={onClick}
        >
          Dashboard
        </Nav.Link> */}
      </Nav.Item>
      <Nav.Item className="sideItems">
        <LinkContainer to="/informationupdate">
          <Nav.Link className="dashBoardLink">Information</Nav.Link>
        </LinkContainer>
        {/* <Nav.Link
          href="/InformationUpdate"
          className="dashBoardLink"
          onClick={onClick}
        >
          Information
        </Nav.Link> */}
      </Nav.Item>{" "}
      <Nav.Item className="sideItems">
        <LinkContainer to="/sellerproduct">
          <Nav.Link className="dashBoardLink">Inventory</Nav.Link>
        </LinkContainer>
        {/* <Nav.Link
          href="/Sellerproduct"
          className="dashBoardLink"
          onClick={onClick}
        >
          Inventory
        </Nav.Link> */}
      </Nav.Item>
      <Nav.Item className="sideItems">
        <LinkContainer to="/inventoryupload">
          <Nav.Link className="dashBoardLink">Add Product</Nav.Link>
        </LinkContainer>
        {/* <Nav.Link
          href="/InventoryUpload"
          className="dashBoardLink"
          onClick={onClick}
        >
          Add Product
        </Nav.Link> */}
      </Nav.Item>
      <Nav.Item className="sideItems">
        <LinkContainer to="/eventupload">
          <Nav.Link className="dashBoardLink">Add Event</Nav.Link>
        </LinkContainer>
        {/* <Nav.Link
          href="/EventUpload"
          className="dashBoardLink"
          onClick={onClick}
        >
          Add Event
        </Nav.Link> */}
      </Nav.Item>
    </div>
  );
};

export default Sidebar;
