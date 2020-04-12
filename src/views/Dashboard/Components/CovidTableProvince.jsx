import React, { Component } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import PropTypes from "prop-types";

import axios from "axios";

const propTypes = {
  showItems: PropTypes.number,
};

const API_URL = "https://api.kawalcorona.com/indonesia/provinsi/";

const formatNumber = (num) => String(num).replace(/(.)(?=(\d{3})+$)/g, "$1,");

class CovidTableProvince extends Component {
  state = {
    dataCovidProvince: [],
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then((res) => {
        this.setState({
          dataCovidProvince: res.data,
        });
        //console.log("response Province", this.state.dataCovidProvince);
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
    const { dataCovidProvince } = this.state;
    let { showItems } = this.props;

    if (showItems === null || showItems === undefined) {
      showItems = 6;
    }
    return (
      <Card>
        <CardHeader>
          Peringkat 5 Teratas dari {dataCovidProvince.length} Provinsi
          Terjangkit Covid-19
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th className="text-center">No.</th>
                <th>Negara</th>
                <th>Terinfeksi</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
              </tr>
            </thead>

            <tbody>
              {dataCovidProvince
                .sort(
                  ({ Kasus_Posi: previousID }, { Kasus_Posi: currentID }) =>
                    previousID - currentID
                )
                .slice(0, showItems)
                .map((item, index) => (
                  <tr key={item.attributes.FID}>
                    <td className="text-center">{index + 1}</td>
                    <td>{formatNumber(item.attributes.Provinsi)}</td>
                    <td>{formatNumber(item.attributes.Kasus_Posi)}</td>
                    <td>{formatNumber(item.attributes.Kasus_Semb)}</td>
                    <td>{formatNumber(item.attributes.Kasus_Meni)}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

CovidTableProvince.propTypes = propTypes;

export default CovidTableProvince;
