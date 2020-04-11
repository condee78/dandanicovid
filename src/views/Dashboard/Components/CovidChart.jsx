import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { Card, CardBody, CardTitle, Col, Row } from "reactstrap";

import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";
import axios from "axios";

const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
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

        //console.log("Chart Response", resultData);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
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
      </Card>
    );
  }
}

export default CovidChart;
