import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "./sidebar/Sidebar";
import { Card, CardImg, CardTitle, CardBody, CardText } from "reactstrap";
import { getInventoryThunk } from "../../redux/actions/formAction";

function Product() {
  const inventoryList = useSelector((state) => state.inventory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInventoryThunk());
  }, [dispatch]);
  return (
    <div className="productContainer d-flex">
      <div>
        <Sidebar />
      </div>
      <div>
        {inventoryList.map((item, index) => (
          <Card id={index} className="card text-dark bg-light">
            <CardImg top width="100%" src={item.image} alt="Card image" />
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              <CardText>Stock:{item.total_quantity}</CardText>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Product;
