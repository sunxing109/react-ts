import * as React from "react";
import { List, Card } from "antd";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { fetchFirstQuarter,HistoryState } from "./historyReducers";
import { rootState } from "../../index";
import { IfirstQuarter } from "../share/model/history";


export interface IProps extends RouteComponentProps,stateMap{
  fetchFirstQuarter():void;
}
// type stateMap = {
//   data: IfirstQuarter[];
// }

// type DispatchP = {
//   fetchFirstQuarter: () => (dispatch: any) => void;
// }

export interface Istate { }

export class FirstQuarter extends React.Component<IProps,Istate>{

  componentDidMount() {
    this.props.fetchFirstQuarter();
  }
  render() {
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
}
  const mapstateToprops = (state: rootState) => ({
    data: state.HistoryReducer.firstQuarter
  });
  const mapDispatchToProps =  {
    fetchFirstQuarter
  };

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