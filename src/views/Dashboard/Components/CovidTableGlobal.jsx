import React, { Component } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import PropTypes from "prop-types";

import axios from "axios";

const propTypes = {
  showItems: PropTypes.number,
};

const API_URL = "https://api.kawalcorona.com/";

const formatNumber = (num) => String(num).replace(/(.)(?=(\d{3})+$)/g, "$1,");

class CovidTableGlobal extends Component {
  state = {
    dataCovidGlobal: [],
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then((res) => {
        this.setState({
          dataCovidGlobal: res.data,
        });
        //console.log("response Global", this.state.dataCovidGlobal);
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
    const { dataCovidGlobal } = this.state;
    let { showItems } = this.props;

    if (showItems === null || showItems === undefined) {
      showItems = 6;
    }
    return (
      <Card>
        <CardHeader>
          Peringkat 5 Teratas dari {dataCovidGlobal.length} Negara Terjangkit
          Covid-19
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
              {dataCovidGlobal
                .sort(
                  ({ Confirmed: previousID }, { Confirmed: currentID }) =>
                    previousID - currentID
                )
                .slice(0, showItems)
                .map((item, index) => (
                  <tr key={item.attributes.OBJECTID}>
                    <td className="text-center">{index + 1}</td>
                    <td>{item.attributes.Country_Region}</td>
                    <td>{formatNumber(item.attributes.Confirmed)}</td>
                    <td>{formatNumber(item.attributes.Recovered)}</td>
                    <td>{formatNumber(item.attributes.Deaths)}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

CovidTableGlobal.propTypes = propTypes;

export default CovidTableGlobal;
