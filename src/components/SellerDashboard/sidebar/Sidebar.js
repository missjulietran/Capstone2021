import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = () => {
  const [click, setClick] = useState(false);

  const onClick = () => setClick(!click);
  return (
    <div className="sidebar">
      <Nav.Item className="sideItems">
        <Nav.Link
          href="/SellerDashboard"
          className="dashBoardLink"
          onClick={onClick}
        >
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="sideItems">
        <Nav.Link
          href="/SellerDashboard"
          className="dashBoardLink"
          onClick={onClick}
        >
          Information
        </Nav.Link>
      </Nav.Item>{" "}
      <Nav.Item className="sideItems">
        <Nav.Link
          href="/Sellerproduct"
          className="dashBoardLink"
          onClick={onClick}
        >
          Inventory
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="sideItems">
        <Nav.Link
          href="/InventoryUpload"
          className="dashBoardLink"
          onClick={onClick}
        >
          Add Product
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="sideItems">
        <Nav.Link
          href="/EventUpload"
          className="dashBoardLink"
          onClick={onClick}
        >
          Add Event
        </Nav.Link>
      </Nav.Item>
    </div>
  );
};

export default Sidebar;
