import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route } from "react-router-dom";
import "./main.scss";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
