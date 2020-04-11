import React, { Component } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";

import axios from "axios";

const API_URL = "https://api.kawalcorona.com/";

const formatNumber = (num) => String(num).replace(/(.)(?=(\d{3})+$)/g, "$1,");

class CovidTableGlobal extends Component {
  state = {
    dataCovidGlobal: [],
    showItems: 5,
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
    const { dataCovidGlobal, showItems } = this.state;
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

export default CovidTableGlobal;
