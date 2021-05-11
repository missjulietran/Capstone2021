import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Events from "./Events/Events";

export const Home = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Future Jumbotron</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <Container Fluid>
        <Events />
      </Container>
    </div>
  );
};

export default Home;
