import React, { Component } from "react";
import { Bar, Line } from "react-chartjs-2";
import { Card, CardBody } from "reactstrap";

import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import { getStyle, hexToRgba } from "@coreui/coreui/dist/js/coreui-utilities";

import PropTypes from "prop-types";

const brandPrimary = getStyle("--primary");
const brandSuccess = getStyle("--success");
const brandInfo = getStyle("--info");
const brandWarning = getStyle("--warning");
const brandDanger = getStyle("--danger");

const propTypes = {
  dataCovid: PropTypes.func
};

const defaultProps = {
  dataCovid: () => ({ title: "Positif", value: "1980", bgColorType: "bg-info" })
};

// Card Chart 2
const cardChartData2 = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: brandInfo,
      borderColor: "rgba(255,255,255,.55)",
      data: [1, 18, 9, 17, 34, 22, 11]
    }
  ]
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: "transparent",
          zeroLineColor: "transparent"
        },
        ticks: {
          fontSize: 2,
          fontColor: "transparent"
        }
      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5
        }
      }
    ]
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
};

class CovidCard extends Component {
  state = {};
  render() {
    // eslint-disable-next-line
    const { dataCovid, ...attributes } = this.props;

    // demo purposes only
    const data = dataCovid();
    const value = data.value;
    const title = data.title;
    const bgColorType = "text-white " + data.bgColorType;

    return (
      <Card className={bgColorType}>
        <CardBody className="pb-0">
          <div className="text-value">{value}</div>
          <div>{title}</div>
        </CardBody>
        <div className="chart-wrapper mx-3" style={{ height: "70px" }}>
          <Line data={cardChartData2} options={cardChartOpts2} height={70} />
        </div>
      </Card>
    );
  }
}

export default CovidCard;
