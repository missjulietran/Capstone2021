import React, { useEffect, useState } from "react";
import BuyerSidebar from "./sidebar/BuyerSidebar";
import "./BuyerOrderPage.css";
import { Table, Button } from "reactstrap";
import dotenv from "dotenv";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";

function BuyerOrderPage() {
  const user = localStorage.getItem("token");
  const [order, setOrder] = useState();

  dotenv.config();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_SERVER}/buyerDashboard`,
        {
          headers: { Authorization: `Bearer ${user}` },
        }
      );
      setOrder(data.orderId);
    };
    fetchData();
  }, [user]);

  return (
    <div className="buyerOrder d-flex">
      <div>
        <BuyerSidebar />
      </div>
      <div className="orderTable">
        <Table hover>
          <thead>
            <tr>
              <th>Order ID #</th>
              <th>Order Date</th>
              <th>Shipping Status</th>
              <th></th>
            </tr>
          </thead>
          {order &&
            order.map((item) => (
              <tbody className="tableitem">
                <tr className="tableitem">
                  <th scope="row">{item.id}</th>
                  <td>{new Date(item.created_at).toLocaleDateString()}</td>
                  <td>{item.shipped}</td>
                  <LinkContainer
                    to={"/buyers/orderdetails/" + item.id}
                    className="justify-content-center linkButton"
                  >
                    <Button>Details</Button>
                  </LinkContainer>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
    </div>
  );
}

export default BuyerOrderPage;
