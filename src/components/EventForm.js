import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Form } from "reactstrap";
import { handleEventSubmissionThunk } from "../redux/actions/formAction";
function EventUploadPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();

  const onChange = (dates) => {
    setStartDate(dates[0]);
    setEndDate(dates[1]);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log("submit form");

    dispatch(
      handleEventSubmissionThunk({
        start: startDate,
        end: endDate,
      })
    );
  };

  return (
    <div>
      <Form onSubmit={handleSubmission}>
        <DatePicker
          selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          inline
        />

        <Button type="submit" value="submit" className="EventCancelBtn">
          CANCEL
        </Button>
        <Button type="submit" value="submit" className="eventBtn">
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}

export default EventUploadPage;
