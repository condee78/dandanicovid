import React, { Component } from "react";
import { Card, CardBody, CardHeader, Table, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";
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
      showItems = 100;
    }

    const displayFooter =
      showItems > 5 ? (
        <CardFooter className="text-center">
          <Link to="/dasboard">Back</Link>
        </CardFooter>
      ) : (
        <CardFooter className="text-center">
          <Link to="/fullprovince">Lihat Semua Provinsi</Link>
        </CardFooter>
      );

    const displayTitle =
      showItems > 5
        ? "Provinsi Indonesia Terjangkit Covid-19"
        : "Peringkat 5 Teratas dari " +
          dataCovidProvince.length +
          " Provinsi Terjangkit Covid-19";

    return (
      <Card>
        <CardHeader>{displayTitle}</CardHeader>
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
        {displayFooter}
      </Card>
    );
  }
}

CovidTableProvince.propTypes = propTypes;

export default CovidTableProvince;
