import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import FirstQuarter from "./firstQuarter";
import SecondQuarter from "./secondQuarter";
import "./styles.css";
const { Content, Sider } = Layout;

const history = ({ location }) => {
  let selectkeyvalue;
  if (location.pathname.includes("second")) {
    selectkeyvalue = ["2"];
  } else {
    selectkeyvalue = ["1"];
  }

  return (
    <Layout style={{ padding: "24px 0", background: "#fff" }}>
      <Sider width={200} style={{ background: "#fff" }}>
        <Menu
          mode="inline"
          selectedKeys={selectkeyvalue}
          defaultSelectedKeys={["1"]}
          style={{ height: "100%" }}
        >
          <Menu.Item key="1">
            <Link to={{ pathname: "/history"}}>第一季度</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={{ pathname: "/history/second"}}>第二季度</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <Switch>
          <Route path="/history" exact component={FirstQuarter} />
          <Route path="/history/second" exact component={SecondQuarter} />
        </Switch>
      </Content>
    </Layout>
  );
};

export default history;
