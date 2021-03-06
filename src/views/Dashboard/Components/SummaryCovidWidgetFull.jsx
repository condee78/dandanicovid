import React, { Component } from "react";
import Widget04 from "../../Widgets/Widget04";
import { CardGroup } from "reactstrap";
import axios from "axios";

const API_URL = "https://api.thevirustracker.com/free-api?countryTotal=ID";

const formatNumber = (num) => String(num).replace(/(.)(?=(\d{3})+$)/g, "$1,");

class SummaryCovidWidgetFull extends Component {
  state = {
    dataCovid: [],
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then((res) => {
        this.setState({
          dataCovid: res.data.countrydata[0],
        });
        //console.log(this.state.dataCovid);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
    const { dataCovid } = this.state;
    return (
      <>
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
            header={formatNumber(dataCovid.total_cases)}
            value="25"
            invert
          >
            Orang Terinfeksi
          </Widget04>
          <Widget04
            icon="fa fa-stethoscope fa-lg mt-4"
            color="warning"
            header={formatNumber(dataCovid.total_active_cases)}
            value="25"
            invert
          >
            Orang Dalam Perawatan
          </Widget04>
          <Widget04
            icon="fa fa-heartbeat fa-lg mt-4"
            color="success"
            header={formatNumber(dataCovid.total_recovered)}
            value="25"
            invert
          >
            Orang Sembuh
          </Widget04>
          <Widget04
            icon="fa fa-heart-o fa-lg mt-4"
            color="dark"
            header={formatNumber(dataCovid.total_deaths)}
            value="25"
            invert
          >
            Orang Meninggal
          </Widget04>
        </CardGroup>

        {/*<Alert color="danger" className="b-0">
          Problem saat mengambil data dari Server. Mohon coba lagi beberapa
          saat!
    </Alert>*/}
      </>
    );
  }
}

export default SummaryCovidWidgetFull;
