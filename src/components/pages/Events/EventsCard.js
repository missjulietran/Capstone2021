import React from "react";
import { useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Countdown from "../Commons/CountdownTimer.js";
import EventSellerName from "./EventSellerName";
import styles from "./Events.module.css";

export const EventsCard = (props) => {
  const location = useLocation();
  const path = location.pathname.slice(0, 7);
  return (
    <div>
      <Container className={styles.container}>
        {props.section.map((event) => {
          return (
            <Card key={event.id} className={styles.card}>
              <div className={styles.imageBox}>
                <Card.Img
                  variant="top"
                  src={event.image}
                  className={styles.image}
                />
              </div>
              <Card.Body className={styles.body}>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>
                  <EventSellerName eventId={event.id} />
                </Card.Text>
                <Countdown
                  className={styles.timer}
                  main={path}
                  event={event}
                  startDate={new Date(event.start_date).getTime()}
                  endDate={new Date(event.end_date).getTime()}
                />
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default EventsCard;
