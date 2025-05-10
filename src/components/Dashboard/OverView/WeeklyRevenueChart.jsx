import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const WeeklyRevenueChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Males",
        data: [
          0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
          4.5, 3.9, 3.5, 3,
        ],
      },
      {
        name: "Females",
        data: [
          -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22,
          -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 440,
        stacked: false,
      },
      colors: ["#8B5CF6", "#F472B6"],
      plotOptions: {
        bar: {
          horizontal: true,
          borderRadius: 5,
          barHeight: "80%",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ["#fff"],
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        title: {
          text: "Weekly Revenue",
        },
      },
      tooltip: {
        shared: false,
        x: {
          formatter: (val) => val,
        },
        y: {
          formatter: (val) => `$${Math.abs(val).toFixed(2)}`,
        },
      },

      xaxis: {
        categories: [
          "Week 1",
          "Week 2",
          "Week 3",
          "Week 4",
          "Week 5",
          "Week 6",
          "Week 7",
          "Week 8",
          "Week 9",
          "Week 10",
          "Week 11",
          "Week 12",
          "Week 13",
          "Week 14",
          "Week 15",
          "Week 16",
          "Week 17",
          "Week 18",
        ],
        title: {
          text: "Weeks",
        },
      },
    },
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold text-purple-700 mb-4">
        Weekly Revenue by Gender
      </h2>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={440}
      />
    </div>
  );
};

export default WeeklyRevenueChart;
