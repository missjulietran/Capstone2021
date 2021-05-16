import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form, Label, Input, FormGroup } from "reactstrap";
import Sidebar from "./sidebar/Sidebar";
import "./InventoryForm.css";

import { handleInventorySubmissionThunk } from "../../redux/actions/formAction";

function InventoryUploadPage() {
  const [selectedCategory, setSelectedCategory] = useState([""]);
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [totalQuantity, setTotalQuantity] = useState("");
  const [minUnits, setMinUnits] = useState("");
  const [price, setPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [bestDate, setBestDate] = useState(new Date());
  const [descriptions, setDescriptions] = useState("");
  const dispatch = useDispatch();

  // Select Category
  const options = [
    { value: "Western", label: "Western" },
    { value: "Asian", label: "Asian" },
    { value: "Snacks", label: "Snacks" },
    { value: "Cosmetic", label: "Cosmetic" },
    { value: "Packaged Meal", label: "Packaged Meal" },
    { value: "Seasoning", label: "Seasoning" },
    { value: "Cereals", label: "Cereals" },
    { value: "Powdered Beverages", label: "Powdered Beverages" },
    { value: "Alcohol", label: "Alcohol" },
    { value: "Skincare", label: "Skincare" },
    { value: "Makeup", label: "Makeup" },
    { value: "Bath & Body", label: "Bath & Body" },
    { value: "Hair Care", label: "Hair Care" },
    { value: "Supplements", label: "Supplements" },
    { value: "Feminine Care", label: "Feminine Care" },
  ];
  const category = [];

  // Submit Whole Form
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("submit form");

    const data = new FormData();
    data.append("file", selectedImage);

    if (Number(minUnits) > Number(totalQuantity)) {
      alert("The minimum order quantity should be less than total quantity");
    } else {
      dispatch(
        handleInventorySubmissionThunk(data, {
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
      <div className="inventoryform"><div className="inventoryContainer">
        <Form onSubmit={handleSubmission}>
          <FormGroup className="inventoryForm">
            <Label for="name">Product Name</Label>
            <br />
            <Input
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="inventoryForm">
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
              required
            />
          </FormGroup>
          <FormGroup className="inventoryForm">
            <Label for="sku">Product SKU</Label>
            <br />
            <Input
              type="sku"
              name="sku"
              id="sku"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="inventoryForm">
            <Label for="totalQuantity">Product Quantity</Label>
            <br />
            <Input
              type="number"
              name="totalQuantity"
              id="totalQuantity"
              min="1000"
              value={totalQuantity}
              onChange={(e) => setTotalQuantity(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="inventoryForm">
            <Label for="minUnits">Minimum Order Quantity</Label>
            <br />
            <Input
              type="number"
              name="minUnits"
              id="minUnits"
              min="100"
              value={minUnits}
              onChange={(e) => setMinUnits(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="inventoryForm">
            <Label for="price">Price per unit</Label>
            <br />
            <Input
              type="price"
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup className="inventoryForm">
            <Label for="bestDate">Best Before Date</Label>
            <br />
            <DatePicker
              selected={bestDate}
              onChange={(date) => setBestDate(date)}
              required
            />
          </FormGroup>
          <FormGroup className="inventoryForm">
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
              required
            />
          </FormGroup>

          <FormGroup className="inventoryForm">
            <Label for="uploadImage">Product Image (.PNG ONLY)</Label>
            <Input
              type="file"
              name="uploadImage"
              id="uploadImage"
              accept=".png"
              onChange={(e) => setSelectedImage(e.target.files[0])}
              required
            />
          </FormGroup>

          <Button
            className="inventoryBtn"
            color="info"
            type="submit"
            value="submit"
          >
            SUBMIT
          </Button>
        </Form>
      </div>
      </div>
    </div>
  );
}
export default InventoryUploadPage;
