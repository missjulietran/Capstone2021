import React from "react";
import { Accordion, Card } from "react-bootstrap";
import styles from "./FAQ.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const FAQ = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Frequent Asked Questions</h1> <hr />
      <div className="d-flex justify-content-center">
        <Accordion defaultActiveKey="0" className={styles.accordion}>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              className={styles.toggle}
              eventKey="0"
            >
              How do I join STILLGOOD?{" "}
              <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className={styles.cardbody}>
                STILLGOOD is a business-to-business online sales platform. Sign
                up from our site and upload the Certificate of Incorporation and
                the Business Registration Certificate, then you can access to
                all the exclusive products and sales events.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              className={styles.toggle}
              eventKey="1"
            >
              How do I update my company information?
              <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className={styles.cardbody}>
                Please update it at your "account setting".
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <h2 className={styles.h2}>SELLERS</h2> <hr />
      <div className="d-flex justify-content-center">
        <Accordion defaultActiveKey="0" className={styles.accordion}>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              className={styles.toggle}
              eventKey="0"
            >
              How do I upload my products?{" "}
              <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className={styles.cardbody}>
                Please fill in the "Add Product" form at "Account Setting".
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              className={styles.toggle}
              eventKey="1"
            >
              Do you offer loyalty points or reward points, gift certificates,
              etc.?
              <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className={styles.cardbody}>
                We have a tier program that allows you to access different kind
                of sales events
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
      <h2 className={styles.h2}>BUYERS</h2> <hr />
      <div className="d-flex justify-content-center">
        <Accordion defaultActiveKey="0" className={styles.accordion}>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              className={styles.toggle}
              eventKey="0"
            >
              Can I return or exchange the items purchased?
              <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body className={styles.cardbody}>
                STILLGOOD has a no refund, no return, no exchange, & no resale
                policy. Please confirm all items before proceed to the checkout.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              className={styles.toggle}
              eventKey="1"
            >
              What payment methods do you accept?
              <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body className={styles.cardbody}>
                Visa, Mastercard, American Express and Union Pay cards are
                accepted.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle
              as={Card.Header}
              className={styles.toggle}
              eventKey="2"
            >
              Do you ship packages internationally?
              <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body className={styles.cardbody}>
                At the moment, we only ship locally. Sorry for the
                inconvenience.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
};
