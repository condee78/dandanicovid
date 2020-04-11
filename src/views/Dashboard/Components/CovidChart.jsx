import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  Col,
  Progress,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Row,
} from "reactstrap";

import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import axios from "axios";
import PropTypes from "prop-types";

const API_URL = "https://corona.lmao.ninja/v2/historical/Indonesia";
const API_URL3 = "https://thevirustracker.com/free-api?countryTimeline=ID"; // failed cors origin

const API_URL2 =
  "'https://cors-anywhere.herokuapp.com/https://thevirustracker.com/free-api?countryTimeline=ID";

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");
const brandDark = getStyle("--dark");

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: "index",
    position: "nearest",
    callbacks: {
      labelColor: function (tooltipItem, chart) {
        return {
          backgroundColor:
            chart.data.datasets[tooltipItem.datasetIndex].borderColor,
        };
      },
    },
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          beginAtZero: false,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
        },
      },
    ],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

const formatDate = (string) => {
  var options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(string).toLocaleDateString([], options);
};

class CovidChart extends Component {
  state = {
    dataChartCovid: {},
    totalConfirmed: 0,
    newConfirmed: 0,
    totalRecovered: 0,
    newRecovered: 0,
    totalDeaths: 0,
    newDeaths: 0,
    totalDays: [],
  };

  componentDidMount() {
    /*axios
      .get(API_URL)
      .then(res => {
        this.setState({
          dataChartCovid: res
        });
        console.log(this.state.dataChartCovid);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
*/
    /*axios({
      method: "GET",
      url:
        "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "f5fe127d42mshb3147a1f414bf54p1e9f78jsn5a3b4d0da0f2"
      },
      params: {
        country: "Indonesia"
      }
    })
      .then(response => {
        console.log("chart", response);
      })
      .catch(error => {
        console.log(error);
      });
      */
    axios({
      method: "GET",
      url: "https://api.smartable.ai/coronavirus/stats/ID",
      headers: {
        "content-type": "application/octet-stream",
        "Subscription-Key": "3009d4ccc29e4808af1ccc25c69b4d5d",
      },
      params: {
        country: "Indonesia",
      },
    })
      .then((res) => {
        const resultData = res.data;
        let chartLabel = [];
        let chartValueConfirmed = [];
        let chartValueDeaths = [];
        let chartValueRecovered = [];

        resultData.stats.history.forEach((element) => {
          chartLabel.push(formatDate(element.date));
          chartValueConfirmed.push(element.confirmed);
          chartValueDeaths.push(element.deaths);
          chartValueRecovered.push(element.recovered);
        });

        this.props.onLastUpdated(resultData.updatedDateTime);

        this.setState({
          // Store data to state
          totalConfirmed: resultData.stats.totalConfirmedCases,
          newConfirmed: resultData.stats.newlyConfirmedCases,

          totalRecovered: resultData.stats.totalRecoveredCases,
          newRecovered: resultData.stats.newlyRecoveredCases,

          totalDeaths: resultData.stats.totalDeaths,
          newDeaths: resultData.stats.newDeaths,

          totalDays: chartValueConfirmed,

          dataChartCovid: {
            labels: chartLabel,
            datasets: [
              {
                label: "Terinfeksi",
                backgroundColor: hexToRgba(brandInfo, 10),
                borderColor: brandDanger,
                pointHoverBackgroundColor: "#fff",
                borderWidth: 2,
                data: chartValueConfirmed,
              },
              {
                label: "Sembuh",
                backgroundColor: "transparent",
                borderColor: brandSuccess,
                pointHoverBackgroundColor: "#fff",
                borderWidth: 2,
                data: chartValueRecovered,
              },
              {
                label: "Meninggal",
                backgroundColor: "transparent",
                borderColor: brandDark,
                pointHoverBackgroundColor: "#fff",
                borderWidth: 1,
                borderDash: [8, 5],
                data: chartValueDeaths,
              },
            ],
          },
        });

        console.log("Chart Response", resultData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const {
      dataChartCovid,
      totalConfirmed,
      newConfirmed,
      totalRecovered,
      newRecovered,
      totalDeaths,
      newDeaths,
    } = this.state;
    return (
      <Card>
        <CardBody>
          <Row>
            <Col sm="6">
              <CardTitle className="mb-0">
                Kasus Covid-19 Indonesia Per Hari
              </CardTitle>
              <div className="small text-muted">
                Total {this.state.totalDays.length - 41} Hari
              </div>
            </Col>
            <Col sm="2">
              <div className="callout callout-danger">
                <small className="text-muted">Kasus Terbaru</small>
                <br />
                <strong className="h4">+{this.state.newConfirmed}</strong>
              </div>
            </Col>
            <Col sm="2">
              <div className="callout callout-success">
                <small className="text-muted">Kesembuhan Terbaru</small>
                <br />
                <strong className="h4">+{this.state.newRecovered}</strong>
              </div>
            </Col>
            <Col sm="2">
              <div className="callout callout-dark">
                <small className="text-muted">Kematian Terbaru</small>
                <br />
                <strong className="h4">+{this.state.newDeaths}</strong>
              </div>
            </Col>
            {/*<Col sm="7" className="d-none d-sm-inline-block">
              <Button color="primary" className="float-right">
                <i className="icon-cloud-download"></i>
              </Button>
              <ButtonToolbar
                className="float-right"
                aria-label="Toolbar with button groups"
              >
                <ButtonGroup className="mr-3" aria-label="First group">
                  <Button
                    color="outline-secondary"
                    onClick={() => this.onRadioBtnClick(1)}
                    active={this.state.radioSelected === 1}
                  >
                    Day
                  </Button>
                  <Button
                    color="outline-secondary"
                    onClick={() => this.onRadioBtnClick(2)}
                    active={this.state.radioSelected === 2}
                  >
                    Month
                  </Button>
                  <Button
                    color="outline-secondary"
                    onClick={() => this.onRadioBtnClick(3)}
                    active={this.state.radioSelected === 3}
                  >
                    Year
                  </Button>
                </ButtonGroup>
              </ButtonToolbar>
              
    </Col>*/}
          </Row>
          <div
            className="chart-wrapper"
            style={{ height: 300 + "px", marginTop: 30 + "px" }}
          >
            <Line
              data={this.state.dataChartCovid}
              options={mainChartOpts}
              height={300}
            />
          </div>
        </CardBody>
        {/*
        <CardFooter>
          <Row className="text-center">
            <Col sm={12} md className="mb-sm-2 mb-0">
              <div className="text-muted">Terinfeksi</div>
              <strong>Rata-rata Orang/Hari</strong>
              <Progress
                className="progress-xs mt-2"
                color="danger"
                value={
                  this.state.totalConfirmed / (this.state.totalDays.length - 41)
                }
              />
            </Col>
            <Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Sembuh</div>
              <strong>Rata-rata Orang/Hari</strong>
              <Progress
                className="progress-xs mt-2"
                color="success"
                value={this.state.totalRecovered / this.state.totalDays}
              />
            </Col>
            <Col sm={12} md className="mb-sm-2 mb-0">
              <div className="text-muted">Meninggal</div>
              <strong>Rata-rata Orang/Hari</strong>
              <Progress
                className="progress-xs mt-2"
                color="dark"
                value={this.state.totalDeaths / this.state.totalDays}
              />
            </Col>
          </Row>
        </CardFooter>
        */}
      </Card>
    );
  }
}

export default CovidChart;
