import { IfirstQuarter, IsecondQuarter } from "../share/model/history";
import { FETCH_FIRST_HISTORTY, FETCH_SECOND_HISTORTY } from "./constant";
import axios from "axios";

const initState = {
  firstQuarter: [] as Array<IfirstQuarter>,
  secondQuarter: [] as Array<IsecondQuarter>
};

export type HistoryState = Readonly<typeof initState>;

export default (state: HistoryState = initState, action): HistoryState => {
  switch (action.type) {
    case FETCH_FIRST_HISTORTY:
      return { ...state, firstQuarter: action.payload };

    case FETCH_SECOND_HISTORTY:
      console.log("====================");
      console.log(action.payload);
      console.log("====================");
      
      return { ...state, secondQuarter: action.payload };
    default:
      return state;
  }
};

export const fetchFirstQuarter = () => {
  return dispatch => {
    fetch("/IfirstQuarter.json")
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: FETCH_FIRST_HISTORTY,
          payload: data
        });
      });
  };
};

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

export const fetchSecondQuarter = () => async dispatch => {
    axios.get("/IsecondQuarter.json").then(data => dispatch({
      type: FETCH_SECOND_HISTORTY,
        payload: data.data
    }) );
}

