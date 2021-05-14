import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import jumbotronpic from "./../../images/jumbotron1.jpeg";
// import styles from "../pages/Events/Events.module.css"

import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Events from "./Events/Events";

export const Home = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundImage: `url(${jumbotronpic})`, backgroundSize: 'cover'}}>
        <p>
          ghello
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron> 
      <h3>Upcoming Events</h3>
<div className="eventdiv">
 
      <Container fluid>
        <Events />
      </Container>
      </div>
    </div>
  );
};

export default Home;
