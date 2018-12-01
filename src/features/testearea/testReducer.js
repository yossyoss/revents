import {createReducer} from '../../app/common/util/reducerUtil'
import { INC_COUNTER, DEC_COUNTER } from "./testConstants";

const initialState = {
  data: 45
};
export const incrementCounter = (state,payload) => {
  return { ...state, data: state.data + 1 };
}
export const decrementCounter = (state,payload) => {
  return { ...state, data: state.data - 1 };
}
// const testReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case INC_COUNTER:
//       return { ...state, data: state.data + 1 };
//     case DEC_COUNTER:
//       return { ...state, data: state.data - 1 };
//     default:
//       return state;
//   }
// };


export default createReducer(initialState,{
  [INC_COUNTER]: incrementCounter,
  [DEC_COUNTER]:decrementCounter
});
