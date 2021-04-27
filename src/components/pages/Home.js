import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

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

      <Container>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="src/images/img-1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
