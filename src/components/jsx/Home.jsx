import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "../css/Home.css";

class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2> Welcome to simple website.</h2>
          <p>
            This is my first attempt on building a simple website using
            react-bootstrap and react-router.
          </p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic" />
            <h2> Frank </h2>
            <p>This is a random one that I am learning.</p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" circle className="profile-pic" />
            <h2> Marie </h2>
            <p>This is a random one that I am learning.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic" />
            <h2> Sujan </h2>
            <p>This is a random one that I am learning.</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
