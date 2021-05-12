import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import axios from "axios";

function EventButton(props) {
  const [choose, setChoose] = useState(false);
  const user = localStorage.getItem("token");

  const addEvent = (id) => {
    setChoose(true);
    axios
      .get(`${process.env.REACT_APP_API_SERVER}/data/eventitem`, {
        headers: { Authorization: `Bearer ${user}` },
      })
      .then((data) => {
        return axios
          .put(
            `${process.env.REACT_APP_API_SERVER}/data/eventitem`,
            { eventid: data.data[0].id, item: id },
            {
              headers: { Authorization: `Bearer ${user}` },
            }
          )
          .then(() => console.log("add event done"))
          .catch((err) => console.log(err));
      })
      .then(() => console.log("added item"))
      .catch((err) => console.log(err));
  };

  const delEvent = (id) => {
    setChoose(false);
    axios
      .put(
        `${process.env.REACT_APP_API_SERVER}/data/eventitem`,
        { eventid: null, item: id },
        {
          headers: { Authorization: `Bearer ${user}` },
        }
      )
      .then(() => console.log("add event done"))
      .catch((err) => console.log(err));
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
          className="btn btn-info"
          onClick={(e) => {
            e.preventDefault();
            addEvent(props.id);
          }}
        >
          ADD TO EVENT
        </Button>
      ) : (
        <Button
          className="btn btn-dark"
          onClick={() => {
            delEvent(props.id);
          }}
        >
          REMOVE FROM EVENT
        </Button>
      )}
    </div>
  );
}

export default EventButton;
