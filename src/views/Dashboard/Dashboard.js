import React, { Component, lazy, Suspense } from "react";

import { Col, Row } from "reactstrap";

import axios from "axios";

import CovidChart from "./Components/CovidChart";
import SummaryCovidWidgetFull from "./Components/SummaryCovidWidgetFull";
import CovidTableGlobal from "./Components/CovidTableGlobal";
import CovidTableProvince from "./Components/CovidTableProvince";
import CovidCallCenter from "./Components/CovidCallCenter";
import WelcomeText from "./Components/WelcomeText";
import StayAtHomeProgram from "./Components/StayAtHomeProgram";
import CovidTableHospitals from "./Components/CovidTableHospitals";
import moment from "moment";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      dateUpdated: "",
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  onLastUpdated = (dateUpdatedCovid) => {
    this.setState({ dateUpdated: dateUpdatedCovid });
  };

  lastUpdateText = () => {
    moment.locale();
    var jamUpdate = moment(this.state.dateUpdated).format("lll");
    return (
      <div>
        Pembaruan Terakhir: <h6>{jamUpdate}</h6>
      </div>
    );
  };

  render() {
    return (
      <div className="animated fadeIn">
        <WelcomeText />
        {this.lastUpdateText()}
        <SummaryCovidWidgetFull />
        <CovidChart onLastUpdated={this.onLastUpdated} />
        <StayAtHomeProgram />
        <Row>
          <Col xs="12" lg="6">
            <CovidTableGlobal />
          </Col>
          <Col xs="12" lg="6">
            <CovidTableProvince />
          </Col>
        </Row>

        <Row>
          <Col xs="6" sm="6" lg="3">
            <CovidCallCenter
              variant="facebook"
              phoneNumber="119 ext. 9"
              provider="Call Center"
              description="Kemenkes RI"
            ></CovidCallCenter>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <CovidCallCenter
              variant="twitter"
              phoneNumber="(0254) 200528"
              provider="RSD Dr.Drajat Prawiranegara"
              description="Serang"
            ></CovidCallCenter>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <CovidCallCenter
              variant="linkedin"
              phoneNumber="(0254) 211554"
              provider="Rumkit Tk. IV/Kencana"
              description="Serang"
            ></CovidCallCenter>
          </Col>

          <Col xs="6" sm="6" lg="3">
            <CovidCallCenter
              variant="google-plus"
              phoneNumber="(0254) 211554"
              provider="UPTD Puskesmas"
              description="Cilegon"
            ></CovidCallCenter>
          </Col>
        </Row>

        <CovidTableHospitals />
      </div>
    );
  }
}

export default Dashboard;
