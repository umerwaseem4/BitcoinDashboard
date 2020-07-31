import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route } from "react-router-dom";
import "./main.scss";

import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default App;
