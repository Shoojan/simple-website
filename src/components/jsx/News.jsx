import React, { Component } from "react";
import "../css/News.css";
import { Grid, Row, Col, Image } from "react-bootstrap";

class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/mountain-man.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} smOffset={2} className="main-section">
              <p>Hello everybody, I have a great news that I am doing.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/dog-people.jpg" />
              <p>
                I spent a lot of time walking around in the woods and talking to
                the trees.
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default News;
