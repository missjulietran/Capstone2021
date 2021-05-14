import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Label, Button, Form, FormGroup, Input } from "reactstrap";
import { handleEventSubmissionThunk } from "../../redux/actions/formAction";
import Sidebar from "./sidebar/Sidebar";
import "./EventForm.css";

function EventUploadPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState();
  const dispatch = useDispatch();

  const onChange = (dates) => {
    setStartDate(dates[0]);
    setEndDate(dates[1]);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("submit event");
    const data = new FormData();
    data.append("file", image);
    dispatch(
      handleEventSubmissionThunk(data, {
        title: title,
        start: startDate,
        end: endDate,
      })
    );

    setTitle("");
    setStartDate(new Date());
    setEndDate(null);
    setImage();
  };

  return (
    <div className="d-flex eventFormContainer ">
      <div>
        <Sidebar />
      </div>
      <div className="eventFormBox">
        <Form onSubmit={handleSubmission}>
          <FormGroup className="eventForm">
            <Label for="name">Event Title</Label>
            <br />
            <Input
              type="title"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </FormGroup>
          <Label for="startDate">Event Date</Label>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            required
          />

          <FormGroup className="eventForm">
            <Label for="image">Event Image</Label>
            <Input
              type="file"
              name="uploadImage"
              id="uploadImage"
              accept=".png"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </FormGroup>
          <div className="buttonBox">
            <Button
              color="info"
              type="submit"
              value="submit"
              className="eventBtn"
            >
              SUBMIT
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default EventUploadPage;
