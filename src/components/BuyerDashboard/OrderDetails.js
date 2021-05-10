import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { Table, Button } from "reactstrap";
import BuyerSidebar from "./sidebar/BuyerSidebar";
import "./OrderDetails.css";

function OrderDetails(props) {
  const user = localStorage.getItem("token");
  const [detail, setDetail] = useState();
  const [total, setTotal] = useState();

  const { orderId } = useParams();
  const history = useHistory();

  let sum = 0;

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/buyerDashboard/${orderId}`,
        {
          headers: { Authorization: `Bearer ${user}` },
        }
      );
      for (let i = 0; i < data.length; i++) {
        sum += data[i].price * data[i].quantity;
        setTotal(sum);
      }
      setDetail(data);
    };
    fetchData();
  }, [orderId]);

  const back = (e) => {
    e.preventDefault();
    history.push("/yourorder");
  };
  return (
    <div className="d-flex">
      <div>
        <BuyerSidebar />
      </div>
      <div className="detailContainer">
        <h1>Order #{orderId}</h1>
        <Table className="detailBox" borderless>
          <thead>
            <tr>
              <th>SKU</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          {detail &&
            detail.map((item) => (
              <tbody>
                <tr>
                  <td>{item.sku}</td>
                  <td>
                    <img width="100px" height="auto" src={item.image} />
                    {item.name}
                  </td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              </tbody>
            ))}
        </Table>
        <h3 className="float-right">Total: ${total}</h3>
        <Button className="backButton" onClick={back}>
          Back
        </Button>
      </div>
    </div>
  );
}

export default OrderDetails;
