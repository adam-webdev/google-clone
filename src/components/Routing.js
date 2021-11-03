import React from "react";
import Result from "./Result";
import { Switch, Redirect, Route } from "react-router-dom";

const Routing = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/search" />
    </Route>
    <Route path="/search">
      <Result />
    </Route>
    <Route path="/news">
      <Result />
    </Route>
    <Route path="/images">
      <Result />
    </Route>
    <Route path="/videos">
      <Result />
    </Route>
  </Switch>
);
export default Routing;
