import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import useFetch from "../Commons/useFetch";
import { Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import {
  faShoppingCart,
  faHandPointLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ProductDetailPage.module.css";
import Loader from "react-loader-spinner";
import { addToCartThunk } from "../../../redux/actions/cartActions";
import dotenv from "dotenv";

dotenv.config();

const ProductDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const {
    data: product,
    loading,
    error,
  } = useFetch(`${process.env.REACT_APP_API_SERVER}/productpage/` + id);
  //Quantity updatersg
  const [quantity, setQuantity] = React.useState(0);
  const [isAdded, setIsAdded] = React.useState(false);

  React.useEffect(() => {
    const fetchQuant = async () => {
      let data = await axios.get(
        `${process.env.REACT_APP_API_SERVER}/productpage/` + id
      );
      setQuantity(data.data[0].total_quantity);
    };
    fetchQuant();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAdd = async () => {
    setIsAdded(true);
    setQuantity(quantity - 1);
  };

  const back = (e) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <div className={styles.container}>
            <button className={styles.back} onClick={back}>
        <FontAwesomeIcon icon={faHandPointLeft} /> Go back
      </button>
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
            <h6>
              Price: ${product && product[0].price.toLocaleString()} / unit
            </h6>
            <br />
            <h6>MOQ: {product && product[0].units}</h6>
            <br />
            {quantity > 0 ? (
              <h6>Remaining Quantity: {quantity.toLocaleString()}</h6>
            ) : (
              <h6>Out of Stock</h6>
            )}
            <br />
            {isAdded ? (
              <Button disabled variant="outline-success">
                Added!
              </Button>
            ) : (
              quantity > 0 &&
              product && (
                <Button
                  onClick={() => {
                    dispatch(
                      addToCartThunk(
                        id,
                        product[0].image,
                        product[0].name,
                        product[0].price
                      )
                    );
                    handleAdd();
                  }}
                  variant="success"
                  size="md"
                  className="btn btn-info"
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Add to Cart
                </Button>
              )
            )}
          </div>
        </Col>
      </div>
    </div>
  );
};

export default ProductDetailPage;
