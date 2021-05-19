import React from "react";
// import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import "../../App.css";
import Card from "react-bootstrap/Card";
import aboutimg from "../../images/jumbotron4.png"

export const About = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundImage: `url(${aboutimg})`, backgroundSize: 'cover'}}>
      </Jumbotron>

      <Container className="aboutDiv">
        <h2 className="ourcompany">Our Company</h2>

        <Container>
          <Row>
            <Col sm={4}>
              <Card className="cardbox">
                <div className="imgbox">
                  <Card.Img
                    variant="top"
                    className="about-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgd5OaXJRGO0Zgj3f3srxYoP0QA6D0G5Mnw&usqp=CAU"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Give back</Card.Title>
                  <Card.Text>
                    Donating food and feminine products to support those in
                    need, especially the elderly and low-income families.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4}>
              <Card className="cardbox">
                <div className="imgbox">
                  <Card.Img
                    variant="top"
                    className="about-img"
                    src="https://ecocarbonltd.com/wp-content/uploads/2020/09/eco-coal.png"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Social Responsibility</Card.Title>
                  <Card.Text>
                    Continuing to work towards the mission of fighting hunger in
                    Hong Kong. Also, raising more awareness of the waste issue
                    by organising hike and beach cleanups.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="cardbox">
                <div className="imgbox">
                  <Card.Img
                    variant="top"
                    className="about-img"
                    src="https://images.squarespace-cdn.com/content/v1/56f9dbb68a65e290bb28506f/1562174678256-H8CZCH0JWBAYE6XILPQI/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/reduce+carbon+footprint+with+The+Chicago+Greenbox.jpg"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Carbon Footprint</Card.Title>
                  <Card.Text>
                    Over 3600 tonnes of food waste are being sent to Hong Kong’s
                    landfills each day. We aim at reducing the amount of food
                    being sent to landfill in order to reduce greenhouse gas
                    emissions.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};
