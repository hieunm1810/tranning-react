import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  //Nơi chứa các state của ứng dụng
  number: (state = 10, action) => {
    switch (action.type) {
      case "TANG_SL": {
        //B1: Lấy giá trị payload từ action gửi lên
        const { payload } = action;
        //B2: Thay đổi state
        state += payload;
        //B3: return về state mới
        return state;
      }
    }

    return state;
  },

  stateA: (state = "abc") => {
    return state;
  },
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// this.state = {
//     number: 1
// }
