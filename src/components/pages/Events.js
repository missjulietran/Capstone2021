import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export const Events = () => {
    return (
            <div className="album py-5 bg-light">
            <Container>
                <Row>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="src/images/img-1.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Row>
</Container>
        </div>
    )
}

export default Events;