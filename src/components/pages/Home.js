import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Events from "./Events/Events"

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
      {/* <Container>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="src/images/img-1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text> */}

                <Events />

              {/* </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container> */}
      </Container>
    </div>
  );
};

export default Home;
