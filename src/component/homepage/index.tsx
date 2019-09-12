import * as React from "react";
import { Route ,Switch} from "react-router-dom";
import Home from "./home";

const Home2 = () => {
  return(
    <div className="">xiaoxi</div>
  );
}

const home = () => {
  return (
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home2" component={Home2} />
      </Switch>
    );
};


export default home;
