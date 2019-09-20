import * as React from "react";
import { render } from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
// import promiseMiddleware from 'redux-promise-middleware';
import { BrowserRouter as Router, Route, Switch,withRouter } from "react-router-dom";
import AppComponent from "./component";
// import SecondQuarter from "./component/history/secondQuarter";
import HistoryReducer, {
  HistoryState
} from "./component/history/historyReducers";
import "./styles.css";
import rootsaga from "./component/saga";

export interface rootState {
  readonly HistoryReducer: HistoryState;
}
export const rootReducer = combineReducers<rootState>({ HistoryReducer });




// const defaultMiddlewares = [thunkMiddleware];
let sagaMiddlewares =  createSagaMiddleware();
const defaultMiddlewares = [sagaMiddlewares];

const store = createStore(rootReducer, applyMiddleware(...defaultMiddlewares));
sagaMiddlewares.run(rootsaga)

export function test(){
  return (
    <div>test</div>
  );
}

export function test2(){
  return (
    <div>test2-1
      <Route path="/second2/test3" component={subTest2}/>
    </div>
  );
}

export const subTest2 = ()=>{
  console.log("subTest2");
  
  return <div>test2-2</div>
}

export function test3(){
  return (
    <div>test3</div>
  );
}
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}
export function App() {
    
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" component={AppComponent} />
          {/* <Route path="/(second2|second3)" exact component={SecondQuarter} /> */}
          {/* <Route path="/second"  component={test} />
          <Route path="/second2/" strict component={test2} /> */}
          {/* <Route component={test3} /> */}
        </Switch>
      </Router>
    </Provider>
  );
}
export default withRouter(App)
const rootElement = document.getElementById("root");
render(<App />, rootElement);
