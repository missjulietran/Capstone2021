import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import styles from "./SubSectionCard.module.css";

const SubSectionCard = (props) => {
  return (
    <div className={styles.sideContainer}>
      {props.subSections
        .sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        })
        .map((subSection, i) => {
          return (
            <div className="mainCategoryDiv">
              {/* // <Col lg={2} md={4} sm={6}> */}
              <Card key={subSection.id} className={styles.card}>
                <Link
                  to={`/${props.section}/${subSection.name}`}
                  className={styles.link}
                >
                  {" "}
                  {subSection.name}
                </Link>
              </Card>
              {/* // </Col> */}
            </div>
          );
        })}
    </div>
  );
};

export default SubSectionCard;
