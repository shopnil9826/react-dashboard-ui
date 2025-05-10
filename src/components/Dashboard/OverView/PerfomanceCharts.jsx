import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Team A Earnings",
        type: "column",
        data: [
          2300, 1100, 2200, 2700, 1300, 2200, 3700, 2100, 4400, 2200, 3000,
        ],
      },
      {
        name: "Team B Earnings",
        type: "area",
        data: [
          4400, 5500, 4100, 6700, 2200, 4300, 2100, 4100, 5600, 2700, 4300,
        ],
      },
      {
        name: "Team C Earnings",
        type: "line",
        data: [
          3000, 2500, 3600, 3000, 4500, 3500, 6400, 5200, 5900, 3600, 3900,
        ],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        stacked: false,
      },
      colors: ["#8B5CF6", "#60A5FA", "#34D399"],
      stroke: {
        width: [0, 2, 5],
        curve: "smooth",
      },
      plotOptions: {
        bar: {
          columnWidth: "50%",
        },
      },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: "light",
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100],
        },
      },
      labels: [
        "01/01/2003",
        "02/01/2003",
        "03/01/2003",
        "04/01/2003",
        "05/01/2003",
        "06/01/2003",
        "07/01/2003",
        "08/01/2003",
        "09/01/2003",
        "10/01/2003",
        "11/01/2003",
      ],
      markers: {
        size: 0,
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        title: {
          text: "Points",
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (value) {
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-purple-700 mb-4">
        Team Earnings
      </h2>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
