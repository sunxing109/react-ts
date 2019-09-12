import * as React from "react";
import { Route } from "react-router-dom";
import Home from "./home";

const home = () => {
  return <Route path="/" component={Home} />;
};

export default home;
