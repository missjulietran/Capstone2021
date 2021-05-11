import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "./ProductCard.module.css";

const ProductCard = (props) => {
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
      <Col>
        <Card className={styles.card}>
          <Link to={`/${props.section}/${props.subSection}/${props.sku}`}>
            <Card.Img variant="top" src={props.img} className={styles.image} />
            <Card.Body key={props.id}>
              <Card.Text>
                <h6>{shortText(props.name)}</h6>
                <hr />
                <h6>${props.price}/unit</h6>
                <hr />
                <h6>Best Before:{props.bbd}</h6>
                <hr />
              </Card.Text>
              <Button variant="success" size="sm">
                <FontAwesomeIcon icon={faShoppingCart} />
                Add to Cart
              </Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    </div>
  );
};

export default ProductCard;
