import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Countdown from "../Commons/CountdownTimer.js";
import EventSellerName from "./EventSellerName";
import styles from "./Events.module.css";

export const EventsCard = (props) => {
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
