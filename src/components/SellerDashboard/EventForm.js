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
        start: startDate,
        end: endDate,
      })
    );
  };

  return (
    <div className="d-flex eventFormContainer ">
      <div>
        <Sidebar />
      </div>
      <div className="eventFormBox d-flex justify-content-center">
        <div className="align-self-center ">
          <Form onSubmit={handleSubmission}>
            <Label for="startDate">Event Date</Label>
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />

            <FormGroup className="eventForm">
              <Label for="image">Event Image</Label>
              <Input
                type="file"
                name="uploadImage"
                id="uploadImage"
                onChange={(e) => setImage(e.target.files[0])}
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
    </div>
  );
}

export default EventUploadPage;
