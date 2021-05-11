import React from "react";
import useFetch from "../Commons/useFetch";
import Container from "react-bootstrap/Container";
import EventsCard from "./EventsCard";
import Loader from "react-loader-spinner";

const Events = () => {
  const { data: event, loading, error } = useFetch(
    "http://localhost:8080/events"
  );

  return (
    <Container fluid>
      {loading && (
        <Loader type="ThreeDots" color="#ccc" height={60} width={60} />
      )}
      {error && <p>{error}</p>}
      {event && <EventsCard section={event} />}
    </Container>
  );
};

export default Events;
