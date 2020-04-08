import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import StayAtHomeCarousels from "./StayAtHomeCarousels";
import StayAtHomeTabs from "./StayAtHomeTabs";

class StayAtHomeProgram extends Component {
  state = {};
  render() {
    return (
      <Card className="card-accent-primary">
        <CardHeader>Program #DiRumahAja</CardHeader>
        <CardBody>
          <Row>
            <Col xs="12" sm="6" md="4">
              <StayAtHomeCarousels />
            </Col>
            <Col xs="12" sm="6" md="8">
              <StayAtHomeTabs />
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default StayAtHomeProgram;
