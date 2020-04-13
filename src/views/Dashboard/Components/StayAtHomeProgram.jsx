import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";
import StayAtHomeCarousels from "./StayAtHomeCarousels";
import StayAtHomeTabs from "./StayAtHomeTabs";
import SubscriberForm from "./SubscriberForm";

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
        <CardFooter>
          <Row>
            <Col sm={6}>
              <h2>
                Yuuk.. Ikutan jadi <Badge color="danger">Subscriber!</Badge>
              </h2>
              Biar kamu tetap dapat update Event #DiRumahAja dan perkembangan
              Covid-19
              <div className="align-middle">
                <SubscriberForm />
              </div>
            </Col>
            <Col sm={6}>
              <div className="float-right">
                <Link to="/fullStayAtHome">Lihat Program Menarik Lainnya!</Link>
              </div>
            </Col>
          </Row>
        </CardFooter>
      </Card>
    );
  }
}

export default StayAtHomeProgram;
