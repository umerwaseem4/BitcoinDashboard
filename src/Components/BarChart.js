import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["Bitcoin", "Etherium"],
  datasets: [
    {
      label: "Crypoto",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [11000, 40],
    },
    {
      label: "Dollar",
      backgroundColor: "rgb(34,139,34)",
      borderColor: "rgb(34,139,34)",
      borderWidth: 1,
      hoverBackgroundColor: "rgb(34,139,34)",
      hoverBorderColor: "rgb(34,139,34)",
      data: [119],
    },
  ],
};

class BarChart extends Component {
  render() {
    return (
      <div className="container">
        {/* <h1 className="text-center secondary">Bar Data</h1> */}
        <Bar
          data={data}
          width={90}
          height={290}
          options={{
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}

export default BarChart;
