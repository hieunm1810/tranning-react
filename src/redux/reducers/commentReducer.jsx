const stateDefault = {
  commentInfo: {
    name: "abc",
    content: "abc",
  },

  arrComment: [
    { name: "Nguyen Van A", content: "Like like like" },
    { name: "Tran Thi B", content: "Like like like" },
  ],

  index: -1,
};

export const commentReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE_COMMENT": {
      // immutable: tính bất biến của redux
      // => đối với state là object hoặc array thì mình sẽ clone state ra vì redux so sánh state cũ và mới, đối với state object thì có thay đổi thuộc tính bên trong thì redux cũng không biết nên phải clone object để thay đổi vùng nhớ, lúc đó redux mới bk state thay đổi
        const {id,value} = action.payload;
        const commentInfoUpdate = {...state.commentInfo};
        commentInfoUpdate[id] = value;
        state.commentInfo = commentInfoUpdate;
        return {...state};
    }
    case "CHANGE_TABLE": {
        const {payload} = action;
        const arrCommentUpdate = [...state.arrComment, payload];
        state.arrComment = arrCommentUpdate;
        return {...state};
    }
    case "DELETE_COMMENT": {
      const {payload} = action;
      const arrCommentUpdate = state.arrComment.filter((element,index) => index !== payload );
      state.arrComment = arrCommentUpdate;
      return {...state};
    }
    case "EDIT_COMMENT": {
      const {payload} = action;
      const commentInfoEdit = state.arrComment.find((element,index) => index === payload);
      state.commentInfo = {...commentInfoEdit};
      state.index = payload;
      return {...state};
    }
    case "UPDATE_COMMENT": {
      const arrCommentUpdate = [...state.arrComment];
      const commentUpdate = arrCommentUpdate[state.index];
      if(commentUpdate) {
        commentUpdate.name = state.commentInfo.name;
        commentUpdate.content = state.commentInfo.content;
      }
      state.arrComment = arrCommentUpdate;
      return {...state};
      
    }
    default:
      return state;
  }
};
