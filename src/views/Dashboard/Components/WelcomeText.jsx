import React, { Component } from "react";
import { Col, Row, Jumbotron } from "reactstrap";
import { element } from "prop-types";

class WelcomeText extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col>
          <h1>Dandani Covid-19</h1>
          <p className="lead">
            Dashboard Data Covid-19 Area Indonesia dan Kota Cilegon, beserta
            informasi penting lainnya.
          </p>
        </Col>
      </Row>
    );
  }
}

export default WelcomeText;
