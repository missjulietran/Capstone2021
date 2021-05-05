import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./sidebar/Sidebar";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Col,
  Row,
  Container,
  Button,
} from "reactstrap";
import {
  delProductThunk,
  getInventoryThunk,
} from "../../redux/actions/formAction";
import "./Product.css";

function Product() {
  const inventoryList = useSelector((state) => state.form.inventory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInventoryThunk());
  }, [dispatch]);

  const shortText = (longtext) => {
    const TEXT_LIMIT = 20;
    if (longtext.length > TEXT_LIMIT) {
      return longtext.substring(0, TEXT_LIMIT) + "...";
    } else {
      return longtext;
    }
  };

  const delProductSubmission = (id) => {
    dispatch(delProductThunk(id));
  };

  return (
    <div className="productContainer d-flex">
      <div>
        <Sidebar />
      </div>
      <Container className="productBox d-flex">
        <Row>
          {inventoryList.map((item, index) => (
            <Col>
              <Card id={index} className="productCard text-dark bg-light">
                <div className="text-center cardImgBox">
                  <CardImg
                    className="productImage"
                    top
                    width="100%"
                    src={item.image}
                    alt="Card image"
                  />
                </div>
                <CardBody className="productDetail d-flex ">
                  <Col className="col-7 align-self-center">
                    <CardTitle>{shortText(item.name)}</CardTitle>
                    <CardText>Stock:{item.total_quantity}</CardText>
                  </Col>
                  <Col className="align-self-center col-5">
                    <Button
                      id={item.id}
                      color="light"
                      type="submit"
                      className="updateBtn"
                      href={"/InventoryUpdate/" + item.sku}
                    >
                      Update
                    </Button>
                    <Button
                      id={item.id}
                      color="light"
                      type="submit"
                      className="deleteBtn"
                      onClick={(e) => {
                        e.preventDefault();
                        delProductSubmission(item.sku);
                      }}
                    >
                      Delete
                    </Button>
                  </Col>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Product;
