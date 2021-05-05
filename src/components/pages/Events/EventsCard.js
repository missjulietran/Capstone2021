import React from "react";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom';
import Countdown from '../Commons/CountdownTimer.js'

export const EventsCard = (props) => {
    return (
            <div className="album py-5 bg-light">
            <Container>
                <Row>
                  {props.section.map(event=>{
                    return(
                      <Card key={event.id} style={{ width: '18rem' }}>
                      <Card.Img variant="top" src="src/images/img-1.jpg" />
                      <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text>
                          An exclusive event by{event.seller}
                        </Card.Text>
                        <Countdown event={event} startDate={new Date(event.start_date).getTime()} endDate={new Date(event.end_date).getTime()}/>
                      </Card.Body>
                    </Card>
                    )
                  })}
           
</Row>
</Container>
        </div>
    )
}

export default EventsCard;