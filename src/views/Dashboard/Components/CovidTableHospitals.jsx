import React, { Component } from "react";
import { Table, Card, CardBody, CardHeader, Progress } from "reactstrap";
import CustomTable from "./CustomTable";

import { Input } from "antd";
import axios from "axios";

const API_URL =
  "https://services8.arcgis.com/xkIJYiP5RSJttiLG/arcgis/rest/services/RS%20Rujukan%20Penanganan%20COVID19/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json";

const { Search } = Input;

class CovidTableHospitals extends Component {
  state = {
    dataHospitals: [],
  };

  componentDidMount() {
    axios
      .get(API_URL)
      .then((res) => {
        const resultData = res.data;

        this.setState({
          dataHospitals: resultData.features
            .map((f) => f.attributes)
            .map((f, index) => ({
              key: index,
              hospitalName: f.Nama_RS,
              province: f.Provinsi,
              address: f.Address,
              phoneNumber: f.No_Telepon,
            })),
        });
        //console.log("response hospital", this.state.dataHospitals);
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
    const { dataHospitals } = this.state;
    return (
      <Card>
        <CardHeader>Rumah Sakit Rujukan Indonesia</CardHeader>
        <CardBody>
          <div>
            <CustomTable dataSource={dataHospitals} />
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default CovidTableHospitals;
