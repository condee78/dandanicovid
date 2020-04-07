import React, { Component } from "react";
import Widget04 from "../../Widgets/Widget04";
import { Col, Row } from "reactstrap";
import axios from "axios";

const API_URL = "https://api.thevirustracker.com/free-api?countryTotal=ID";
const API_URL_INDO = "https://api.kawalcorona.com/indonesia/";

class SummaryCovidWidget extends Component {
  state = {
    dataCovid: []
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then(res => {
        this.setState({
          dataCovid: res.data.countrydata[0]
        });
        //console.log(this.state.dataCovid);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

  render() {
    const { dataCovid } = this.state;
    return (
      <Row>
        <Col xs="12" sm="6" lg="3">
          <Widget04
            icon="fa fa-plus-square fa-lg mt-4"
            color="danger"
            header={dataCovid.total_cases}
            value="25"
            invert
          >
            Orang Terinfeksi
          </Widget04>
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Widget04
            icon="fa fa-stethoscope fa-lg mt-4"
            color="warning"
            header={dataCovid.total_active_cases}
            value="25"
            invert
          >
            Orang Dalam Perawatan
          </Widget04>
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Widget04
            icon="fa fa-heartbeat fa-lg mt-4"
            color="success"
            header={dataCovid.total_recovered}
            value="25"
            invert
          >
            Orang Sembuh
          </Widget04>
        </Col>
        <Col xs="12" sm="6" lg="3">
          <Widget04
            icon="fa fa-heart-o fa-lg mt-4"
            color="dark"
            header={dataCovid.total_deaths}
            value="25"
            invert
          >
            Orang Meninggal
          </Widget04>
        </Col>
      </Row>
    );
  }
}

export default SummaryCovidWidget;
