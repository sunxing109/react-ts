import * as React from "react";
import { Layout } from "antd";
import ReactEcharts from "echarts-for-react";
import "antd/dist/antd.css";
import "./styles.css";

const Home = () => {
  let data:number[] = [];
  for (let i = 0; i <= 360; i++) {
    let t = (i / 180) * Math.PI;
    let r = Math.sin(2 * t) * Math.cos(2 * t);
    
    data.push(r,i);
  }
  const option1 = {
    title: {
      text: "极坐标双数值轴"
    },
    legend: {
      data: ["line"]
    },
    polar: {
      center: ["50%", "54%"]
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross"
      }
    },
    angleAxis: {
      type: "value",
      startAngle: 0
    },
    radiusAxis: {
      min: 0
    },
    series: [
      {
        coordinateSystem: "polar",
        name: "line",
        type: "line",
        showSymbol: false,
        data: data
      }
    ],
    animationDuration: 2000
  };

  const { Content } = Layout;

  const option2 = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};

  return (
    <Layout style={{ padding: "24px 0", background: "#fff" }}>
      <Content style={{ padding: "0 24px", minHeight: 280 }}>
        <ReactEcharts option={option1} />
        <ReactEcharts option={option2} />
      </Content>
    </Layout>
  );
};

export default Home;
