import React from "react";
import { Link } from "react-router-dom";
// import { Card } from "react-bootstrap";
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
              <div key={subSection.id} className={styles.card}>
                <Link
                  to={`${props.main}/${props.section}/${subSection.name}`}
                  className={styles.link}
                >
                  {" "}
                  {subSection.name}
                </Link>
              </div>
              {/* // </Col> */}
            </div>
          );
        })}
    </div>
  );
};

export default SubSectionCard;
