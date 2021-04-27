import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { Button, Form, Label, Input } from "reactstrap";

import {
  postImageThunk,
  handleSubmissionThunk,
} from "../redux/actions/templateAction";

function FileUploadPage() {
  const [selectedCategory, setSelectedCategory] = useState([""]);
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [totalQuantity, setTotalQuantity] = useState("");
  const [minUnits, setMinUnits] = useState("");
  const [price, setPrice] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [bestDate, setBestDate] = useState(new Date());
  const [descriptions, setDescriptions] = useState("");
  // const [isFilePicked, setIsFilePicked] = useState(false);
  const dispatch = useDispatch();

  // Select Category
  const options = [
    { value: "Western Snacks", label: "Western Snacks" },
    { value: "Asian Snacks", label: "Asian Snacks" },
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

  // Submit Whole Form
  const handleSubmission = (e) => {
    e.preventDefault();
    const image = new FormData();
    image.append("file", selectedImage);
    dispatch(
      handleSubmissionThunk({
        category: selectedCategory,
        name: name,
        sku: sku,
        quantity: totalQuantity,
        units: minUnits,
        price: price,
        best_before_date: bestDate,
        descriptions: descriptions,
        image: image,
      })
    );
  };

  // Image Upload
  // const changeHandler = (event) => {
  //   setselectedImage(event.target.files[0]);
  //   // setIsFilePicked(true);
  // };
  // const handleImage = () => {
  //   const data = new FormData();
  //   data.append("file", selectedImage);
  //   console.log(data);
  //   // dispatch(postImageThunk(data));
  //   axios
  //     .post(`http://localhost:8080/uploadImage`, data) //CHANGE URL
  //     .then(() => {
  //       console.log("post image");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div>
      <Form onSubmit={handleSubmission}>
        <Label for="name">Product Name</Label>
        <Input
          type="name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Label for="selectedCategory">Category</Label>
        <Select
          isMulti
          options={options}
          onChange={(e) =>
            e.map((items) => {
              category.push(items.value);
              setSelectedCategory(category);
            })
          }
          required
        />
        <Label for="sku">Product SKU</Label>
        <Input
          type="sku"
          name="sku"
          id="sku"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          required
        />
        <Label for="totalQuantity">Product Quantity</Label>
        <Input
          type="number"
          name="totalQuantity"
          id="totalQuantity"
          min="50"
          value={totalQuantity}
          onChange={(e) => setTotalQuantity(e.target.value)}
          required
        />
        <Label for="minUnits">Minimum Order Quantity</Label>
        <Input
          type="number"
          name="minUnits"
          id="minUnits"
          min="10"
          value={minUnits}
          onChange={(e) => setMinUnits(e.target.value)}
          required
        />
        <Label for="price">Price per unit</Label>
        <Input
          type="price"
          name="price"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <Label for="bestDate">Best Before Date</Label>
        <DatePicker
          selected={bestDate}
          onChange={(date) => setBestDate(date)}
          required
        />
        <Label for="descriptions">Product Descriptions</Label>
        <Input
          type="descriptions"
          name="descriptions"
          id="descriptions"
          value={descriptions}
          onChange={(e) => setDescriptions(e.target.value)}
          required
        />
        <Input
          type="file"
          name="uploadImage"
          id="uploadImage"
          onChange={(e) => setSelectedImage(e.target.files[0])}
          required
        />
        {/* <Button onClick={handleImage}>Upload</Button> */}
        <Button color="info" type="submit" value="submit">
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}
export default FileUploadPage;
