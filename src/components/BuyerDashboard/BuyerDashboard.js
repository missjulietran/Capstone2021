import React, { useState, useEffect } from "react";
import BuyerSidebar from "./sidebar/BuyerSidebar";

// import { Card, CardTitle, CardBody, CardText, Col } from "reactstrap";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import "./BuyerDashboard.css";
import dotenv from "dotenv";
import axios from "axios";


function BuyerDashboard() {
  const [buyer, setBuyer] = useState();
  const [latestProducts, setLatestProducts] = useState();
  const [latestOrder, setLatestOrder] = useState();
  const [latestAmount, setLatestAmount] = useState();

dotenv.config()

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
      {/* <div className="sidebar"> */}
        <BuyerSidebar />
      {/* </div> */}

      <div className="buyerDashboardContainer">
        <div className="buyerDetail">
          <h3>
            Welcome Back{" "}, <span className="buyername"><h3>{buyer && buyer.name}</h3></span>
          </h3>
        </div>
        

        
              <Card className="latestproducts" border="info" >
    <Card.Header><h4>View the latest Products</h4></Card.Header>
    <Card.Body>
      <Card.Text>
      <div className="latestBox d-flex">
            {latestProducts &&
              latestProducts.map((item, index) => (
                <Card id={index} className="buyercard">
                  <div className="text-center ">
                    <img
                      className="productImage"
                      src={item.image}
                      alt="Product"
                    />
                  </div>
                  <Card.Body>
                    <Col className="align-self-center">
                      <Card.Title>{shortText(item.name)}</Card.Title>
                      <Card.Text>Price: ${item.price}/unit</Card.Text>
                    </Col>
                  </Card.Body>
                </Card>
              ))}
          </div>
      </Card.Text>
    </Card.Body>
  </Card>


<Card className="latestproducts" border="info" >
    <Card.Header><h4>View your Last Order</h4></Card.Header>
    <Card.Body>
      <Card.Text>
      <h4>Total: ${latestAmount && latestAmount}</h4>
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
                  <Card.Body>
                    <Col className="align-self-center">
                      <Card.Title>{shortText(item.name)}</Card.Title>
                      <Card.Text>Order Quantity: {item.quantity}</Card.Text>
                      <Card.Text>Price: ${item.price}/unit</Card.Text>
                    </Col>
                  </Card.Body>
                </Card>
              ))}
          </div>
      </Card.Text>
    </Card.Body>
  </Card>

      </div>
    </div>
  );
}

export default BuyerDashboard;
