import React from "react";
import { Col, Card } from "react-bootstrap";
import styles from "./GiveBack.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingHeart,
  faHiking,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

function GiveBack() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Col>
          <Card className={styles.card}>
            <div className={styles.iconBox}>
              {" "}
              <FontAwesomeIcon
                className={styles.icon}
                icon={faHandHoldingHeart}
              />
              <h3>DONATE</h3>
              <hr />
            </div>
            <div className={styles.description}>
              If you have products you'd like us to distribute: please reach out
              to us to arrange drop-off/pick-up. Our email is: {"   "}
              {"   "}
              <span className={styles.text}>
                <a className={styles.text} href="mailto: contact@stillgood.com">
                  contact@stillgood.com
                </a>
              </span>
            </div>
          </Card>
        </Col>
        <Col>
          <Card className={styles.card}>
            <div className={styles.iconBox}>
              {" "}
              <FontAwesomeIcon className={styles.icon} icon={faHiking} />
              <h3>EVENTS</h3>
              <hr />
            </div>
            <div className={styles.description}>
              We will hold Beach or Hike Cleaning every month. Please reach out
              to us if you are interested in joining the events.
            </div>
          </Card>
        </Col>
        <Col>
          <Card className={styles.card}>
            <div className={styles.iconBox}>
              {" "}
              <FontAwesomeIcon className={styles.icon} icon={faHandsHelping} />
              <h3>VOLUNTEER</h3>
              <hr />
            </div>
            <div className={styles.description}>
              Volunteering at one of our events or helping sort products are
              just a few of the ways you can help.
            </div>
          </Card>
        </Col>
      </div>
    </div>
  );
}

export default GiveBack;
