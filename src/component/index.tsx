import * as React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import HeaderDiv from "./share/layout/header/header";
import FooterDiv from "./share/layout/footer";
import HomePage from "./homepage";
import History from "./history";

const AppComponent = ({ match }) => {
  const { Content } = Layout;
  return (
    <Layout>
      <HeaderDiv />
      <Content style={{ padding: "0 50px" }}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/history" component={History} />
        </Switch>
      </Content>
      <FooterDiv />
    </Layout>
  );
};

export default AppComponent;
