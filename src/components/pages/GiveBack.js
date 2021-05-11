import React from "react";
import { Col, Card } from "react-bootstrap";
import styles from "./GiveBack.module.css";

function GiveBack() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Col>
          <Card className={styles.card}>
            <p>DONATE</p>
            <p>
              If you have products you'd like us to distribute: please reach out
              to us to arrange drop-off/pick-up. Our email is
              contact@stillgood.com
            </p>
          </Card>
        </Col>
        <Col>
          <Card className={styles.card}></Card>
        </Col>
        <Col>
          <Card className={styles.card}></Card>
        </Col>
      </div>
    </div>
  );
}

export default GiveBack;
