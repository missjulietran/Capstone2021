import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import Sidebar from "./sidebar/Sidebar";
import "./UpdateInventory.css";
import axios from "axios";
import { updateInventoryThunk } from "../../redux/actions/formAction";

function UpdateInventory() {
  const [selectedCategory, setSelectedCategory] = useState([""]);
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [totalQuantity, setTotalQuantity] = useState("");
  const [minUnits, setMinUnits] = useState("");
  const [price, setPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [bestDate, setBestDate] = useState(new Date());
  const [descriptions, setDescriptions] = useState("");
  const { itemId } = useParams();
  const dispatch = useDispatch();

  // sending passportJwt token to backend
  const user = localStorage.getItem("token");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:8080/singleProduct/${itemId}`,
        {
          headers: { Authorization: `Bearer ${user}` },
        }
      );
      setName(data[0].name);
      setSku(data[0].sku);
      setTotalQuantity(data[0].total_quantity);
      setMinUnits(data[0].units);
      setPrice(data[0].price);
      //   setBestDate(data[0].best_before_date);
      //   setSelectedImage(data[0].image);
      setDescriptions(data[0].descriptions);
      setSelectedCategory(data[0].category);
    };
    fetchData();
  }, [itemId]);

  // Select Category
  const options = [
    { value: "Western", label: "Western" },
    { value: "Asian", label: "Asian" },
    { value: "Snacks", label: "Snacks" },
    { value: "Packaged Meal", label: "Packaged Meal" },
    { value: "Seasoning", label: "Seasoning" },
    { value: "Cereals", label: "Cereals" },
    { value: "Ready-To-Drink Beverages", label: "Ready-To-Drink Beverages" },
    { value: "Alcohol", label: "Alcohol" },
    { value: "Skincare", label: "Skincare" },
    { value: "Makeup", label: "Makeup" },
    { value: "Bath & Body", label: "Bath & Body" },
    { value: "Hair Care", label: "Hair Care" },
    { value: "Supplements", label: "Supplements" },
    { value: "Feminine Care", label: "Feminine Care" },
  ];
  const category = [];

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("submit form");

    const data = new FormData();
    data.append("file", selectedImage);
    if (minUnits > totalQuantity) {
      alert("The minimum order quantity should be less than total quantity");
    } else {
      dispatch(
        updateInventoryThunk(data, {
          id: itemId,
          category: selectedCategory,
          name: name,
          sku: sku,
          quantity: totalQuantity,
          units: minUnits,
          price: price,
          best_before_date: bestDate,
          descriptions: descriptions,
        })
      );
    }
  };

  return (
    <div className="d-flex ">
      <div>
        <Sidebar />
      </div>
      <div className="updateContainer">
        <Form onSubmit={handleSubmission}>
          <FormGroup className="updateForm">
            <Label for="name">Product Name</Label>
            <br />
            <Input
              type="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="updateForm">
            <Label for="selectedCategory">Category</Label>
            <br />
            <Select
              isMulti
              options={options}
              onChange={(e) =>
                e.map((items) => {
                  category.push(items.value);
                  return setSelectedCategory(category);
                })
              }
            />
          </FormGroup>
          <FormGroup className="updateForm">
            <Label for="sku">Product SKU</Label>
            <br />
            <Input
              type="sku"
              name="sku"
              id="sku"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="updateForm">
            <Label for="totalQuantity">Product Quantity</Label>
            <br />
            <Input
              type="number"
              name="totalQuantity"
              id="totalQuantity"
              min="50"
              value={totalQuantity}
              onChange={(e) => setTotalQuantity(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="updateForm">
            <Label for="minUnits">Minimum Order Quantity</Label>
            <br />
            <Input
              type="number"
              name="minUnits"
              id="minUnits"
              min="10"
              value={minUnits}
              onChange={(e) => setMinUnits(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="updateForm">
            <Label for="price">Price per unit</Label>
            <br />
            <Input
              type="price"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="updateForm">
            <Label for="bestDate">Best Before Date</Label>
            <br />
            <DatePicker
              selected={bestDate}
              onChange={(date) => setBestDate(date)}
            />
          </FormGroup>
          <FormGroup className="updateForm">
            <Label for="descriptions">Product Descriptions</Label>
            <br />
            <Input
              type="textarea"
              name="textValue"
              id="descriptions"
              value={descriptions}
              rows="10"
              cols="80"
              onChange={(e) => setDescriptions(e.target.value)}
            />
          </FormGroup>

          <FormGroup className="updateForm">
            <Label for="uploadImage">Product Image (.PNG ONLY)</Label>
            <Input
              type="file"
              name="uploadImage"
              id="uploadImage"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
          </FormGroup>

          <Button
            className="updateBtn"
            color="info"
            type="submit"
            value="submit"
          >
            UPDATE
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateInventory;
