import React, { useState, useEffect } from "react";
import BuyerSidebar from "./sidebar/BuyerSidebar";

import { Card, CardTitle, CardBody, CardText, Col } from "reactstrap";
import "./BuyerDashboard.css";

import axios from "axios";
function BuyerDashboard() {
  const [buyer, setBuyer] = useState();
  const [latestProducts, setLatestProducts] = useState();
  const [latestOrder, setLatestOrder] = useState();
  const [latestAmount, setLatestAmount] = useState();

  const user = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API_SERVER}/buyerDashboard`, {
        headers: { Authorization: `Bearer ${user}` },
      });
      setBuyer(data.buyer[0]);
      setLatestProducts(data.latest);
      setLatestOrder(data.latestOrder);
      setLatestAmount(data.latestAmount);
    };
    fetchData();
  }, [user]);

  const shortText = (longtext) => {
    const TEXT_LIMIT = 20;
    if (longtext.length > TEXT_LIMIT) {
      return longtext.substring(0, TEXT_LIMIT) + "...";
    } else {
      return longtext;
    }
  };
  return (
    <div className="buyerDashboard d-flex">
      <div>
        <BuyerSidebar />
      </div>

      <div className="buyerDashboardContainer">
        <div className="buyerDetail">
          <h2>
            Welcome Back{" "}
            <span className="buyername">{buyer && buyer.name}</span>!
          </h2>
        </div>
        <div className="latestProducts">
          <h2>Latest Product</h2>

          <div className="latestBox d-flex">
            {latestProducts &&
              latestProducts.map((item, index) => (
                <Card id={index} className="latestCard">
                  <div className="text-center ">
                    <img
                      className="productImage"
                      src={item.image}
                      alt="Product"
                    />
                  </div>
                  <CardBody>
                    <Col className="align-self-center">
                      <CardTitle>{shortText(item.name)}</CardTitle>
                      <CardText>Price: ${item.price}/unit</CardText>
                    </Col>
                  </CardBody>
                </Card>
              ))}
          </div>
        </div>
        <div className="lastOrder">
          <h2>Your Last Order</h2>
          <h3>Total: ${latestAmount && latestAmount}</h3>
          <div className="latestOrderBox d-flex">
            {latestOrder &&
              latestOrder.map((item, index) => (
                <Card id={index} className="latestCard">
                  <div className="text-center ">
                    <img
                      className="productImage"
                      src={item.image}
                      alt="Product"
                    />
                  </div>
                  <CardBody>
                    <Col className="align-self-center">
                      <CardTitle>{shortText(item.name)}</CardTitle>
                      <CardText>Order Quantity: {item.quantity}</CardText>
                      <CardText>Price: ${item.price}/unit</CardText>
                    </Col>
                  </CardBody>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyerDashboard;
