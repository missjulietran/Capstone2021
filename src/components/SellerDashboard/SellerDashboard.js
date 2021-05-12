import React, { useState, useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
import { Line, Bar } from "react-chartjs-2";
import { Card, Col, Container } from "react-bootstrap";
import "./SellerDashboard.css";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config()

function SellerDashboard() {
  const [length, setLength] = useState();
  const [stock, setStock] = useState();
  const [sold, setSold] = useState();
  const [revenue, setRevenue] = useState();
  const [topProduct, setTopProduct] = useState("");
  const [order, setOrder] = useState();

  const shortText = (longtext) => {
    const TEXT_LIMIT = 5;
    if (longtext.length > TEXT_LIMIT) {
      return longtext.substring(0, TEXT_LIMIT) + "...";
    } else {
      return longtext;
    }
  };

  // sending passportJwt token to backend
  const user = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API_SERVER}/dashboard`, {
        headers: { Authorization: `Bearer ${user}` },
      });
      setLength(data.length);
      setStock(data.stock);
      setSold(data.sold);
      setRevenue(data.revenue);
      setTopProduct(data.product);
      setOrder(data.order);
    };
    fetchData();
  }, [user]);

  const soldState = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Units Sold",
        backgroundColor: "#c5ebe0",
        data: [0, 0, 0, 0, `${sold}`],
      },
    ],
  };
  const revState = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Sales Revenue",
        fill: true,
        lineTension: 0.5,
        backgroundColor: "#c5d3eb",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [0, 0, 0, 0, `${revenue}`],
      },
    ],
  };

  return (
    <div className="sellerDashboard d-flex">
      <div>
        <Sidebar />
      </div>
      <Container fluid className="dashboardContainer">
        <div className=" d-flex cardBox">
          <Col className="col-3">
            <Card className="dashboardCard">
              <Card.Body>
                <Card.Title className="dashboardTitle">{length}</Card.Title>
                <div className="text-right">
                  <Card.Title className="dashboradText">
                    Potential Buyers
                  </Card.Title>
                </div>
              </Card.Body>
            </Card>

            <Card className="dashboardCard ">
              <Card.Body>
                <Card.Title className="dashboardTitle">{order}</Card.Title>
                <div className="text-right">
                  <Card.Title className="dashboradText">Orders</Card.Title>
                </div>
              </Card.Body>
            </Card>

            <Card className="dashboardCard">
              <Card.Body>
                <Card.Title className="dashboardTitle">
                  {topProduct && shortText(topProduct)}
                </Card.Title>
                <div className="text-right">
                  <Card.Title className="dashboradText">Top Product</Card.Title>
                </div>
              </Card.Body>
            </Card>
            <Card className="dashboardCard">
              <Card.Body>
                <Card.Title className="dashboardTitle">{stock}</Card.Title>
                <div className="text-right">
                  <Card.Title className="dashboradText">InStock</Card.Title>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-9 align-self-center">
            <Bar data={soldState} />
          </Col>
        </div>
        <div className="d-flex cardBox">
          <Line data={revState} />
        </div>
      </Container>
    </div>
  );
}

export default SellerDashboard;
