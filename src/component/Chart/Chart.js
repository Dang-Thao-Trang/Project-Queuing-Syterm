import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import series from "./series";
export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Biểu đồ",
          data: series.dayData.prices,
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 380,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },

        title: {
          text: "Bảng thống kê theo ngày",
          align: "left",
        },

        subtitle: {
          text: "Tháng 11/2021",
          align: "left",
        },

        labels: series.dayData.dates,
        xaxis: {
          type: "date",
          categrogries: ["1", "13", "19", "31"],
        },
        yaxis: {
          opposite: false,
        },
        legend: {
          horizontalAlign: "left",
        },
        chart: {
          toolbar: {
            show: false,
            tools: {
              download: false,
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <div className="follow">{/* <p>Xem theo</p> */}</div>
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={380}
        />
      </div>
    );
  }
}
