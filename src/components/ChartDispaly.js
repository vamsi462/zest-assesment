

import React from "react";
import {Bar} from "react-chartjs-2";

const ChartDispaly = props => {
  const barChart = props.chartData.length ? (
    <Bar
      data={{
        labels: props.chartData.map(id => id.adaccount_id),
        datasets: [
          {
            data: props.chartData.map(pr => pr.pre),
            label: "Pre",
            borderColor: "yellow",
            backgroundColor: "#5abdd3",
          },
          {
            data: props.chartData.map(pt => pt.post),
            label: "Post",
            backgroundColor: "#0d1264",
          },
        ],
      }}
      width={960}
      height={500}
      options={{
        legend: {display: true, position: "bottom"},
        scales: {
          xAxes: [
            {
              ticks: {
                autoSkip: false,
                maxRotation: 90,
                minRotation: 90,
              },
            },
          ],
        },
      }}
    />
  ) : null;
  return <div id='chart_container'>{barChart}</div>;
};

export default ChartDispaly;
