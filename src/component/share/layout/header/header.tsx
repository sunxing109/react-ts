import * as React from "react";
import { Link,withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./styles.css";

const headerDiv = ({location}) => {
  const { Header } = Layout;

  let selectkeyvalue;
      
  if (location.pathname.includes("history")) {
    selectkeyvalue = ["2"];
  } else {
    selectkeyvalue = ["1"];
  }

  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={selectkeyvalue}
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">
          <Link to="/">首页</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/history">历史</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default withRouter(headerDiv);
