import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faColumns,
  faUserEdit,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button'
import styles from "./BuyerSidebar.module.css";

const BuyerSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.wrapper}>
        <div class={styles.dashboardTitle}>
          <h3>Dashboard</h3><br /><hr />
        </div>

        <LinkContainer to="/buyers/buyerdashboard">
          <Nav.Link className={styles.link}>
            <div className={styles.iconName}><FontAwesomeIcon className={styles.icon} icon={faColumns} />
             Your Information </div>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/buyers/updatebuyer">
          <Nav.Link className={styles.link}>
            <div className={styles.iconName}><FontAwesomeIcon className={styles.icon} icon={faUserEdit} />
             Update Information</div>
          </Nav.Link>
        </LinkContainer>
        <LinkContainer to="/buyers/yourorder">
          <Nav.Link className={styles.link}>
            <div className={styles.iconName}><FontAwesomeIcon className={styles.icon} icon={faShoppingCart} />
             Your Orders</div>
          </Nav.Link>
        </LinkContainer>
      </div>
    </div>
  );
};

export default BuyerSidebar;
