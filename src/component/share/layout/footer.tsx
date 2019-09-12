import React from "react";
import { Layout } from "antd";

const footerDiv = () => {
  const { Footer } = Layout;
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
  );
};

export default footerDiv;
