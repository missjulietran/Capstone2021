import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import styles from "./ProductCard.module.css";



const ProductCard = (props) => {
  console.log("product card", props.main);
  const shortText = (longtext) => {
    const TEXT_LIMIT = 20;
    if (longtext.length > TEXT_LIMIT) {
      return longtext.substring(0, TEXT_LIMIT) + "...";
    } else {
      return longtext;
    }
  };
  return (
    <div className="d-flex">
        <Card className={styles.card}>
          <Link
            to={`${props.main}/${props.section}/${props.subSection}/${props.sku}`}
          >
            <Card.Img variant="top" src={props.img} className={styles.image} />
            <Card.Body key={props.id}>
              <Card.Text>
                <h6>{shortText(props.name)}</h6>
                <hr />
                <h6>${props.price.toLocaleString()} / unit</h6>
                <hr />
                <h6 className={styles.bbd}><b>Best Before:</b><br />{props.bbd}</h6>
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>
    </div>
  );
};

export default ProductCard;
