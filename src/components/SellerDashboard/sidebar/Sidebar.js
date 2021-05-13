import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faUserEdit,
  faBoxes,
  faPlus,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <LinkContainer to="/seller/sellerdashboard">
        <Nav.Link className={styles.link}>
          {" "}
          <FontAwesomeIcon className={styles.icon} icon={faChartLine} />{" "}
          Dashboard
        </Nav.Link>
      </LinkContainer>

      <LinkContainer to="/seller/informationupdate">
        <Nav.Link className={styles.link}>
          {" "}
          <FontAwesomeIcon className={styles.icon} icon={faUserEdit} />{" "}
          Information
        </Nav.Link>
      </LinkContainer>

      <LinkContainer to="/seller/sellerproduct">
        <Nav.Link className={styles.link}>
          {" "}
          <FontAwesomeIcon className={styles.icon} icon={faBoxes} /> Inventory
        </Nav.Link>
      </LinkContainer>

      <LinkContainer to="/seller/inventoryupload">
        <Nav.Link className={styles.link}>
          {" "}
          <FontAwesomeIcon className={styles.icon} icon={faPlus} /> Add Product
        </Nav.Link>
      </LinkContainer>

      <LinkContainer to="/seller/eventupload">
        <Nav.Link className={styles.link}>
          {" "}
          <FontAwesomeIcon className={styles.icon} icon={faCalendarPlus} /> Add
          Event
        </Nav.Link>
      </LinkContainer>
    </div>
  );
};

export default Sidebar;
