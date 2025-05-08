import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import Classes from "../Card/Card.module.css";

class DonutChart extends Component {
  state = {
    options: {
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 220
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ],
      legend: { position: "bottom" },
      labels: ["Present", "Absent"],
      colors: ["#008000", "#B22222"]
    }
  };

  render() {
    const { attendance, subject } = this.props;
    const series = [attendance.p, attendance.a]; // Present, Absent

    return (
      <div className={Classes.chart}>
        <ReactApexChart
          options={this.state.options}
          series={series}
          type="donut"
          width="300"
        />
        <h1 style={{ textAlign: "center" }}>{subject}</h1>
      </div>
    );
  }
}

export default DonutChart;
