import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faColumns,
  faUserEdit,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./BuyerSidebar.module.css";

const BuyerSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <LinkContainer to="/buyerdashboard">
        <Nav.Link className={styles.link}>
          <FontAwesomeIcon className={styles.icon} icon={faColumns} /> Your
          Information
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="updatebuyer">
        <Nav.Link className={styles.link}>
          <FontAwesomeIcon className={styles.icon} icon={faUserEdit} /> Update
          Information
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/yourorder">
        <Nav.Link className={styles.link}>
          <FontAwesomeIcon className={styles.icon} icon={faShoppingCart} /> Your
          Orders
        </Nav.Link>
      </LinkContainer>
    </div>
  );
};

export default BuyerSidebar;
