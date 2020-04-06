import React, { Component } from "react";
import Widget04 from "../../Widgets/Widget04";
import { CardGroup, Col, Row } from "reactstrap";
import axios from "axios";

const API_URL = "https://api.thevirustracker.com/free-api?countryTotal=ID";
const API_URL_INDO = "https://api.kawalcorona.com/indonesia/";

class SummaryCovidWidgetFull extends Component {
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
        console.log(this.state.dataCovid);
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
      <CardGroup className="mb-4">
        <Widget04
          icon="flag-icon flag-icon-id mt-4"
          color="info"
          header={dataCovid.total_danger_rank}
          value="25"
          invert
        >
          Peringkat Indonesia di Dunia
        </Widget04>
        <Widget04
          icon="fa fa-plus-square fa-lg mt-4"
          color="danger"
          header={dataCovid.total_cases}
          value="25"
          invert
        >
          Orang Terinfeksi
        </Widget04>
        <Widget04
          icon="fa fa-stethoscope fa-lg mt-4"
          color="warning"
          header={dataCovid.total_active_cases}
          value="25"
          invert
        >
          Orang Dalam Perawatan
        </Widget04>
        <Widget04
          icon="fa fa-heartbeat fa-lg mt-4"
          color="success"
          header={dataCovid.total_recovered}
          value="25"
          invert
        >
          Orang Sembuh
        </Widget04>
        <Widget04
          icon="fa fa-heart-o fa-lg mt-4"
          color="dark"
          header={dataCovid.total_deaths}
          value="25"
          invert
        >
          Orang Meninggal
        </Widget04>
      </CardGroup>
    );
  }
}

export default SummaryCovidWidgetFull;
