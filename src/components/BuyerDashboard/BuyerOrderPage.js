import React, { useEffect, useState } from "react";
import BuyerSidebar from "./sidebar/BuyerSidebar";
import "./BuyerOrderPage.css";
import { Table } from "reactstrap";

import axios from "axios";

function BuyerOrderPage() {
  const user = localStorage.getItem("token");

  const [id, setId] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:8080/buyerDashboard`, {
        headers: { Authorization: `Bearer ${user}` },
      });
      setId(data.orderId);
    };
    fetchData();
  }, []);
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
            </tr>
          </thead>
          {id &&
            id.map((item, index) => (
              <tbody>
                <tr href="/">
                  <th scope="row">{item.id}</th>
                  <td>{new Date(item.created_at).toLocaleDateString()}</td>
                  <td>{item.shipped}</td>
                </tr>
              </tbody>
            ))}
        </Table>
      </div>
    </div>
  );
}

export default BuyerOrderPage;
