import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import { Line, Bar } from "react-chartjs-2";
import { Card, Row, Col, Container } from "react-bootstrap";
import "./SellerDashboard.css";
import axios from "axios";
function SellerDashboard() {
  const [length, setLength] = useState();
  const [stock, setStock] = useState();
  const [sold, setSold] = useState();
  const [revenue, setRevenue] = useState();
  const [topProduct, setTopProduct] = useState();
  const [order, setOrder] = useState();
  const { userId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/dashboard/${userId}`
      );
      setLength(data.length);
      setStock(data.stock);
      setSold(data.sold);
      setRevenue(data.revenue);
      setTopProduct(data.product);
      setOrder(data.order);
    };
    fetchData();
  }, [userId]);

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
        data: [65, 59, 80, 81, `${sold}`],
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
        data: [1000, 500, 2000, 5000, `${revenue}`],
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
                <Card.Title className="dashboardTitle">{topProduct}</Card.Title>
                <div className="text-right">
                  <Card.Title className="dashboradText">Top Product</Card.Title>
                </div>
              </Card.Body>
            </Card>
            <Card className="dashboardCard">
              <Card.Body>
                <Card.Title className="dashboardTitle">{stock}</Card.Title>
                <div className="text-right">
                  <Card.Title className="dashboradText">Stock</Card.Title>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-9 align-self-center">
            <Bar data={soldState} />
          </Col>
        </div>
        <div className=" d-flex cardBox ">
          <Row>
            <Col></Col>
          </Row>
        </div>
        <div>
          <Line data={revState} />
        </div>
      </Container>
    </div>
  );
}

export default SellerDashboard;
