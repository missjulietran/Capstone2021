import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import useFetch from "../Commons/useFetch";
import { Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ProductDetailPage.module.css";
import Loader from "react-loader-spinner";
import { addToCart } from "../../../redux/actions/cartActions";

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(
    `${process.env.REACT_APP_API_SERVER}/productpage/` + id
  );

  const back = (e) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        {loading && (
          <Loader type="ThreeDots" color="#ccc" height={60} width={60} />
        )}
        {error && <p>{error}</p>}
        <Col>
          {product && (
            <img
              src={product[0].image}
              className={styles.image}
              alt="product"
            />
          )}
        </Col>
        <br />
        <Col>
          <div className={styles.detailBox}>
            <h1>{product && product[0].name}</h1> <hr />
            <p>{product && product[0].descriptions}</p>
            <h6>Price: ${product && product[0].price}/unit</h6>
            <br />
            <h6>MOQ: {product && product[0].units}</h6>
            <br />
            <h6>Remaining Quantity:{product && product[0].total_quantity}</h6>
            <br />
            <select>
              <option></option>
              <option value="" disabled selected>
                Select Quantity
              </option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
            <br />
            {product && (
              <Button
                className={styles.button}
                onClick={() =>
                  dispatch(
                    addToCart(
                      id,
                      product[0].image,
                      product[0].name,
                      product[0].price
                    )
                  )
                }
                variant="success"
                size="sm"
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                Add to Cart
              </Button>
            )}
          </div>
        </Col>
      </div>
      <button className={styles.back} onClick={back}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} /> Back
      </button>
    </div>
  );
};

export default ProductDetailPage;
