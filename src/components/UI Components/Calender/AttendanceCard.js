
/*import React, { Component } from "react";
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
    },
    showDetails: false // Track visibility of detailed data
  };

  toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  render() {
    const { attendance, subject, totalDays, presentDays } = this.props;
    const series = [attendance.p, attendance.a]; // Present, Absent percentages
    const absentDays = totalDays - presentDays; // Calculate absent days

    return (
      <div className={Classes.chart}>
        <div onClick={this.toggleDetails} style={{ cursor: "pointer" }}>
          <ReactApexChart
            options={this.state.options}
            series={series}
            type="donut"
            width="300"
          />
        </div>
        <h1 style={{ textAlign: "center", fontSize: "18px", margin: "10px 0" }}>{subject}</h1>
        {this.state.showDetails && (
          <div className={Classes.attendanceDetails}>
            <div className={Classes.attendanceItem}>
              <span className={Classes.present}>Present: {presentDays} days</span>
            </div>
            <div className={Classes.attendanceItem}>
              <span className={Classes.absent}>Absent: {absentDays} days</span>
            </div>
            <div className={Classes.attendanceItem}>
              <span>Total: {totalDays} days</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DonutChart;*/
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
    },
    showDetails: false // Track visibility of floating window
  };

  handleMouseEnter = () => {
    this.setState({ showDetails: true });
  };

  handleMouseLeave = () => {
    this.setState({ showDetails: false });
  };

  render() {
    const { attendance, subject, totalDays, presentDays } = this.props;
    const series = [attendance.p, attendance.a]; // Present, Absent percentages
    const absentDays = totalDays - presentDays; // Calculate absent days

    return (
      <div className={Classes.chart}>
        <div
          className={Classes.chartWrapper}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          style={{ position: "relative" }}
        >
          <ReactApexChart
            options={this.state.options}
            series={series}
            type="donut"
            width="300"
          />
          {this.state.showDetails && (
            <div className={Classes.floatingWindow}>
              <div className={Classes.attendanceItem}>
                <span className={Classes.present}>Present: {presentDays} days</span>
              </div>
              <div className={Classes.attendanceItem}>
                <span className={Classes.absent}>Absent: {absentDays} days</span>
              </div>
              <div className={Classes.attendanceItem}>
                <span>Total: {totalDays} days</span>
              </div>
            </div>
          )}
        </div>
        <h1 style={{ textAlign: "center", fontSize: "18px", margin: "10px 0" }}>{subject}</h1>
      </div>
    );
  }
}

export default DonutChart;