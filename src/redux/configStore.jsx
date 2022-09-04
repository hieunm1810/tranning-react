import { createStore, combineReducers } from "redux";
import burgerReducer from "./reducers/burgerReducer";
import { commentReducer } from "./reducers/commentReducer";
import { imgCarReducer } from "./reducers/imgCarReducer";
import { numberReducer } from "./reducers/numberReducer";
import sinhVienReducer from "./reducers/sinhVienReducer";

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  //Khi dispatch thi tat ca cac reducer se chay, nen phai co phan kiem tra de xem no vao reducer nao
  number: numberReducer,

  stateA: (state = "abc") => {
    return state;
  },

  img: imgCarReducer,
  commentReducer: commentReducer,
  burgerReducer: burgerReducer,
  sinhVienReducer: sinhVienReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// this.state = {
//     number: 1
// }
