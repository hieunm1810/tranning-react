//rxreducer
const initialState = {
  burger: [
      { id: "cheese", price: 5, quantity: 2 },
      { id: "beef", price: 20, quantity: 2 },
      { id: "salad", price: 10, quantity: 2 },
  ],

//   sum: function () {
//     return this.burger.reduce((prev, cur, index) => cur.price + prev, 0);
//   },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_TOPPING": {
        const {id,quantity} = payload;
        const burgerArrUpdate = [...state.burger];
        const item = burgerArrUpdate.find(element => id === element.id);
        item.quantity += quantity;
        if(item.quantity === 0) {
            alert("Số lượng ít nhất nhất là 1");
            item.quantity = 1;
        }
        state.burger = burgerArrUpdate;
        return {...state};
    }
    default:
      return state;
  }
};
