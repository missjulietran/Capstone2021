import React from "react";
import { Nav } from "react-bootstrap";
import "./BuyerSidebar.css";

const BuyerSidebar = () => {
  return (
    <div className="buyersidebar">
      <Nav.Item className="buyersideItems">
        <Nav.Link href="/buyerdashboard" className="buyerdashBoardLink">
        <i class="far fa-copy"></i> Your Information
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="buyersideItems">
        <Nav.Link href="/updatebuyer" className="buyerdashBoardLink">
        <i class="fas fa-id-card"></i> Update Information
        </Nav.Link>
      </Nav.Item>{" "}
      <Nav.Item className="buyersideItems">
        <Nav.Link href="/yourorder" className="buyerdashBoardLink">
        <i class="fas fa-truck"></i> Your Orders
        </Nav.Link>
      </Nav.Item>
    </div>
  );
};

export default BuyerSidebar;
