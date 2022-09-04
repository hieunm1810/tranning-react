const initialState = {
  sinhVienObj: {
    id: "1",
    name: "Tran Gia Lap",
    phone: "0123456789",
    email: "trangialap@gmail.com",
  },

  sinhVienArr: [
    {
      id: "1",
      name: "Trần Gia Lạp",
      phone: "0123456789",
      email: "trangialap@gmail.com",
    },
  ],

  disabled: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "CHANGE_INPUT": {
      const { id, value } = payload;
      const sinhVienObjUpdate = { ...state.sinhVienObj };
      sinhVienObjUpdate[id] = value;
      state.sinhVienObj = sinhVienObjUpdate;
      return { ...state };
    }
    case "ADD_SINHVIEN": {
      const sinhVienArrUpdate = [...state.sinhVienArr, payload];
      state.sinhVienArr = sinhVienArrUpdate;
      return { ...state };
    }
    case "DELETE_SINHVIEN": {
      const sinhVienArrUpdate = state.sinhVienArr.filter(
        (element) => element !== payload
      );
      state.sinhVienArr = sinhVienArrUpdate;
      return { ...state };
    }
    case "EDIT_SINHVIEN": {
      state.sinhVienObj = payload;
      state.disabled = true;
      return { ...state };
    }
    case "UPDATE_SINHVIEN": {
      const { id, name, phone, email } = payload;
      const sinhVienArrUpdate = [...state.sinhVienArr];
      const sinhVienObjUpdate = sinhVienArrUpdate.find(
        (element) => element.id === id
      );
      if (sinhVienObjUpdate) {
        sinhVienObjUpdate.name = name;
        sinhVienObjUpdate.phone = phone;
        sinhVienObjUpdate.email = email;
      }
      state.sinhVienArr = sinhVienArrUpdate;
      state.disabled = false;
      return { ...state };
    }
    default:
      return state;
  }
};
