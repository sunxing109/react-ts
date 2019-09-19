import { fork, all,takeEvery,call,put } from 'redux-saga/effects'
import { FETCH_FIRST_HISTORTY, FETCH_SECOND_HISTORTY } from "./history/constant";
import axios from "axios";

export function* fetchFirstQuarter(dispatch:any) {
    console.log("====================1=============");
    try {
    const result = yield call(axios,"/IfirstQuarter.json");
    console.log(JSON.parse(JSON.stringify(result.data)));
    
    yield put({
        type: FETCH_FIRST_HISTORTY,
        payload: JSON.parse(JSON.stringify(result.data))
      });
    }catch(err){
        console.log("====================1======err=======");
        console.log(err);
        console.log("====================1======errend=======");
    }
}

export function* fetchSecondQuarter() {
    console.log("====================2=============");
    try {
    const result = yield call(axios,"/IsecondQuarter.json");
    console.log("22222"+JSON.parse(JSON.stringify(result.data)));
    
    yield put({
        type: FETCH_SECOND_HISTORTY,
        payload: JSON.parse(JSON.stringify(result.data))
      });
    }catch(err){
        console.log(err);
        
    }

}

export default function* root() {
    /*
      takeEvery will fork a new `getAllProducts` task on each GET_ALL_PRODUCTS actions
      i.e. concurrent GET_ALL_PRODUCTS actions are allowed
    */
    yield takeEvery("FETCH_FIRST_HISTORTY1", fetchFirstQuarter)
    yield takeEvery("FETCH_SECOND_HISTORTY1", fetchSecondQuarter)
  }

// export default function* root() {
//     yield takeEvery(FETCH_FIRST_HISTORTY, fetchFirstQuarter)
//   }





//   export const fetchFirstQuarter = () => {
//     console.log("====================fetchFirstQuarter action");
    
//     return dispatch => {
//       fetch("/IfirstQuarter.json")
//         .then(res => res.json())
//         .then(data => {
//           console.log("====================11");
          
//           dispatch({
//             type: FETCH_FIRST_HISTORTY,
//             payload: data
//           });
//         });
//     };
//   };
  
  // export const fetchSecondQuarter = () => {
  //   return dispatch => {
  //     fetch("/IsecondQuarter.json")
  //       .then(res => res.json())
  //       .then(data => {
  //         dispatch({
  //           type: FETCH_SECOND_HISTORTY,
  //           payload: data
  //         });
  //       });
  //   };
  // };
  
//   export const fetchSecondQuarter = () => async dispatch => {
//       await axios.get("/IsecondQuarter.json").then(data => dispatch({
//         type: FETCH_SECOND_HISTORTY,
//           payload: data.data
//       }) );
//   }
  
  