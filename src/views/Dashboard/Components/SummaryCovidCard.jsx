import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import CovidCard from "./CovidCard";

class SummaryCovidCards extends Component {
  state = {};
  render() {
    return (
      <Row>
        <Col xs="12" sm="6" lg="3">
          <CovidCard
            dataCovid={() => ({
              title: "Positif",
              value: "1475",
              bgColorType: "bg-danger"
            })}
          ></CovidCard>
        </Col>
        <Col xs="12" sm="6" lg="3">
          <CovidCard
            dataCovid={() => ({
              title: "Dirawat",
              value: "1475",
              bgColorType: "bg-warning"
            })}
          ></CovidCard>
        </Col>
        <Col xs="12" sm="6" lg="3">
          <CovidCard
            dataCovid={() => ({
              title: "Sembuh",
              value: "1475",
              bgColorType: "bg-success"
            })}
          ></CovidCard>
        </Col>
        <Col xs="12" sm="6" lg="3">
          <CovidCard
            dataCovid={() => ({
              title: "Meninggal",
              value: "1475",
              bgColorType: "bg-dark"
            })}
          ></CovidCard>
        </Col>
      </Row>
    );
  }
}

export default SummaryCovidCards;
