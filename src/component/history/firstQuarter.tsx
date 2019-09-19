import * as React from "react";
import { List, Card } from "antd";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
// import { fetchFirstQuarter, HistoryState } from "./historyReducers";
import { FETCH_FIRST_HISTORTY } from "./constant";
import { rootState } from "../../index";
// import { IfirstQuarter } from "../share/model/history";


export interface IProps extends RouteComponentProps, stateMap {
  fetchFirstQuarter:()=> void;
}
// type stateMap = {
//   data: IfirstQuarter[];
// }

// type DispatchP = {
//   fetchFirstQuarter: () => (dispatch: any) => void;
// }

export interface Istate { }

export class FirstQuarter extends React.Component<IProps, Istate>{

  constructor(props: IProps) {
    super(props);
    console.log("====================constructor");
  }
  componentWillMount() {
    console.log("====================componentWillMount");
  }
  componentDidMount() {
    console.log("====================componentDidMount");
    this.props.fetchFirstQuarter();

  }
  render() {
    console.log("====================render");

    const { data } = this.props;
    return (
      <div>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>{item.content}</Card>
            </List.Item>
          )}
        />
      </div>
    );
  }

  componentWillReceiveProps() {
    console.log("====================componentWillReceiveProps");

  }
  shouldComponentUpdate() {
    console.log("====================shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("====================componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("====================componentDidUpdate");

  }
  componentWillUnmount() {
    console.log("====================componentWillUnmount");
  }

}
const mapstateToprops = (state: rootState) => {
  console.log("====================mapstateToprops");

  return ({
    data: state.HistoryReducer.firstQuarter
  })
};

//  // mapDispatchToProps为对象类型
//  es6中对象属性名称简写
// const mapDispatchToProps = { fetchFirstQuarter }
// 原样
// const mapDispatchToProps = { fetchFirstQuarter:fetchFirstQuarter }
// 解析后为 对象
// const mapDispatchToProps: {
//   fetchFirstQuarter: () => (dispatch: any) => void;
// }


//  // mapDispatchToProps为函数类型
const mapDispatchToProps = (dispatch:any)=>{
  return ({
     fetchFirstQuarter:()=>{dispatch({type:"FETCH_FIRST_HISTORTY1"});}
     })
}
// 解析后为 函数
// const mapDispatchToProps: (dispatch: any) => {
//   fetchFirstQuarter: () => void;
// }

type stateMap = ReturnType<typeof mapstateToprops>;


export default connect(mapstateToprops, mapDispatchToProps)(FirstQuarter);
// ReturnType
// type stateMap = {
//   data: IfirstQuarter[];
// }

// type stateMap = (state: rootState) => {
//   data: IfirstQuarter[];
// }

// type DispatchP = {
//   fetchFirstQuarter: () => (dispatch: any) => void;
// }