import * as React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppComponent from "./component";
import HistoryReducer, {
  HistoryState
} from "./component/history/historyReducers";
import "./styles.css";

export interface rootState {
  readonly HistoryReducer: HistoryState;
}

const rootReducer = combineReducers<rootState>({ HistoryReducer });

const defaultMiddlewares = [
  thunkMiddleware,
  promiseMiddleware
];


const store = createStore(rootReducer, applyMiddleware(...defaultMiddlewares));
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={AppComponent} />
      </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
