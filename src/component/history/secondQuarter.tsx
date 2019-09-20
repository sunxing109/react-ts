import * as React from "react";
import { List, Avatar, Icon, Button } from "antd";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
// import { fetchSecondQuarter } from "./historyReducers";
import { FETCH_SECOND_HISTORTY } from "./constant";
import { rootState } from "../../index";
import { IsecondQuarter } from "../share/model/history";

interface IProps extends StateProps, RouteComponentProps {
  fetchSecondQuarter(): void;
}
interface Istate { }

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class secondQuarter extends React.PureComponent<IProps, Istate> {
  componentDidMount() {
    this.props.fetchSecondQuarter();
  }

  handleClick = () => {
    console.log("点击");

    this.props.history.push("/");
  }

  render() {

    return (
      <div>
        <Button onClick={this.handleClick}>按钮</Button>
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3
          }}
          dataSource={this.props.data}
          footer={
            <div>
              <b>ant design</b> footer part
            </div>
          }
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  type="star-o"
                  text="156"
                  key="list-vertical-star-o"

                />,
                <IconText
                  type="like-o"
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText type="message" text="2" key="list-vertical-message" />
              ]}
              extra={
                <img
                  width={272}
                  alt="logo"
                  src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                />
              }
            >
              <List.Item.Meta
                // avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}

              />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

const mapstateToprops = (state: rootState) => {
  let secondQuarter: IsecondQuarter[] = JSON.parse(JSON.stringify(state.HistoryReducer.secondQuarter));
  return ({
    data: secondQuarter
  });
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchSecondQuarter: () => { dispatch({ type: "FETCH_SECOND_HISTORTY1" }) }
  }
}

type StateProps = ReturnType<typeof mapstateToprops>;
type DispatchProps = typeof mapDispatchToProps;
export default connect(
  mapstateToprops,
  mapDispatchToProps
)(secondQuarter);
