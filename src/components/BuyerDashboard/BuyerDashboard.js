import React, { useState, useEffect } from "react";
import BuyerSidebar from "./sidebar/BuyerSidebar";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  Col,
  Row,
  Container,
} from "reactstrap";
import "./BuyerDashboard.css";
import { getLatestThunk } from "../../redux/actions/buyerAction";

function BuyerDashboard() {
  //   const [name, setName] = useState();
  //   const [latest, setLatest] = useState();
  //   const [order, setOrder] = useState();

  const latestList = useSelector((state) => state.buyer.latest);
  const dispatch = useDispatch();

  const shortText = (longtext) => {
    const TEXT_LIMIT = 20;
    if (longtext.length > TEXT_LIMIT) {
      return longtext.substring(0, TEXT_LIMIT) + "...";
    } else {
      return longtext;
    }
  };
  console.log(latestList);
  useEffect(() => {
    dispatch(getLatestThunk());
  }, [dispatch]);

  return (
    <div className="buyerDashboard d-flex">
      <div>
        <BuyerSidebar />
      </div>

      <Container fluid className="buyerDashboardContainer">
        <div className="buyerDetail">
          <h1>Hey </h1>
        </div>
        <div className="latestProducts">
          <h1>Lastest Product</h1>
          <div className="lastestBox">
            {latestList.map((item, index) => (
              <Col>
                <Card id={index} className="latestCard">
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
                      <CardText>Price:{item.total_quantity}</CardText>
                    </Col>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </div>
        </div>
        <div className="lastOrder">
          <h1>Your Last Order</h1>
        </div>
      </Container>
    </div>
  );
}

export default BuyerDashboard;
