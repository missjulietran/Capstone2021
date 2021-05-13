import React from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import SortFeature from "../Commons/SortFeature";
import styles from "./ProductList.module.css"

const ProductList = (props) => {
  const [criteria, setCriteria] = React.useState("");
  const changeHandler = (e) => {
    setCriteria(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className={styles.productlist}>
      <Container fluid>
        <SortFeature changeHandler={changeHandler} />
        <Row>
          {props.products
            .sort((a, b) => {
              switch (criteria) {
                case "priceAsc":
                  return a.price > b.price ? 1 : -1;
                case "priceDesc":
                  return a.price < b.price ? 1 : -1;
                case "bbdAsc":
                  return a.best_before_date > b.best_before_date ? 1 : -1;
                case "bbdDesc":
                  return a.best_before_date < b.best_before_date ? 1 : -1;
                default:
                  return a.name > b.name ? 1 : -1;
              }
            })
            .map((product) => {
              return (
                <Col>
                  <ProductCard
                    key={product.id}
                    img={product.image}
                    section={props.section}
                    subSection={props.subSection}
                    sku={product.sku}
                    name={product.name}
                    price={product.price}
                    bbd={new Date(
                      product.best_before_date
                    ).toLocaleDateString()}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductList;
