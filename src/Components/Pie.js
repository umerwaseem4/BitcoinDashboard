import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Bitcoin", "Etherium"],
  datasets: [
    {
      data: [11000, 119],
      backgroundColor: ["#FF6384", "#36A2EB"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB"],
    },
  ],
};

class Piechart extends Component {
  render() {
    return (
      <div>
        <Pie data={data} />
      </div>
    );
  }
}

export default Piechart;
