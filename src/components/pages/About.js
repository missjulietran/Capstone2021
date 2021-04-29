import React from "react";
import Button from "react-bootstrap/Button";
// import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import "../../App.css";
import Card from "react-bootstrap/Card";

export const About = () => {
  return (
    <div>
      {/* <Jumbotron>
        <h1>Future Jumbotron</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron> */}

      <Container className="aboutDiv">
        <h2>Our Company</h2>

        <Container fluid>
          <Row>
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  className="about-img"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgd5OaXJRGO0Zgj3f3srxYoP0QA6D0G5Mnw&usqp=CAU"
                />
                <Card.Body>
                  <Card.Title>Give back</Card.Title>
                  <Card.Text>
                    Give back to the community
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  className="about-img"
                  src="https://ecocarbonltd.com/wp-content/uploads/2020/09/eco-coal.png"
                />
                <Card.Body>
                  <Card.Title>Social Responsibility</Card.Title>
                  <Card.Text>
text text
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  className="about-img"
                  src="https://images.squarespace-cdn.com/content/v1/56f9dbb68a65e290bb28506f/1562174678256-H8CZCH0JWBAYE6XILPQI/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/reduce+carbon+footprint+with+The+Chicago+Greenbox.jpg"
                />
                <Card.Body>
                  <Card.Title>Carbon Footprint</Card.Title>
                  <Card.Text>
Reducing your companies carbon footprint
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container>
          Text text
        </Container>
      </Container>
    </div>
  );
};
