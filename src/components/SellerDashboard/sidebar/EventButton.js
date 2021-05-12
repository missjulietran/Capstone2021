import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import axios from "axios";
import { addToEventThunk } from "../../../redux/actions/formAction";

function EventButton(props) {
  const [choose, setChoose] = useState(false);
  const addEvent = (id) => {
    setChoose(true);
    console.log("click", id);
    addToEventThunk(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      const user = localStorage.getItem("token");
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_SERVER}/data/singleProduct/${props.id}`,
        {
          headers: { Authorization: `Bearer ${user}` },
        }
      );
      if (data[0].event_id === null) {
        setChoose(false);
      } else {
        setChoose(true);
      }
    };
    fetchData();
  }, [props.id]);

  return (
    <div>
      {choose === false ? (
        <Button
          className="btn btn-success"
          onClick={(e) => {
            e.preventDefault();
            addEvent(props.id);
          }}
        >
          ADD TO EVENT
        </Button>
      ) : (
        <Button
          className="btn btn-danger"
          onClick={() => {
            setChoose(false);
          }}
        >
          REMOVE FROM EVENT
        </Button>
      )}
    </div>
  );
}

export default EventButton;
