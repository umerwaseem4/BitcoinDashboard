import React, { Component } from "react";
import axios from "axios";
import Appbar from "./Appbar";
import Barchart from "./BarChart";
import Pie from "./Pie";

class Dashboard extends Component {
  state = {
    crypotos: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR"
      )
      .then((res) => {
        const crypoto = res.data;
        this.setState({ crypotos: crypoto });
      });
  }

  render() {
    return (
      <div className="dashboard">
        <Appbar />
        <div className="dashboard__main container">
          <div className="mainDashboardHeading">
            <h1>Bitcoin Price:</h1>
            <h2 className="header">{`${this.state.crypotos.USD}$`}</h2>
          </div>
        </div>
        <div className="graphs">
          <div className="bar__chart">
            <h2 className="text-center">Bar Data</h2>
            <Barchart />
          </div>
          <div className="pie__chart">
            <h2 className="text-center">Pie Data</h2>
            <Pie height={50} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
// 60a530e2f516d849dd69418a76ee8f022508272239966152f50b46a71073bce6
