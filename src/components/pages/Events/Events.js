import React from "react";
import useFetch from "../Commons/useFetch";
// import Container from "react-bootstrap/Container";
import EventsCard from "./EventsCard";
import Loader from "react-loader-spinner";
import dotenv from "dotenv";

dotenv.config()


const Events = () => {
  const { data: event, loading, error } = useFetch(
    `${process.env.REACT_APP_API_SERVER}/events`
  )

  return (
    <>
      {loading && (
        <Loader type="ThreeDots" color="#ccc" height={60} width={60} />
      )}
      {error && <p>{error}</p>}
      {event && <EventsCard section={event} />}
    </>
  );
};

export default Events;
