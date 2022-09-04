import React, { Component } from "react";
import { connect } from "react-redux";
import { store } from "../../../redux/configStore";
import { commentReducer } from "../../../redux/reducers/commentReducer";

class FormComment extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { commentInfo } = this.props;
    const action = {
      type: "CHANGE_TABLE",
      payload: commentInfo,
    };
    this.props.dispatch(action);
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    const action = {
      type: "CHANGE_COMMENT",
      payload: { id, value },
    };
    this.props.dispatch(action);
  };
  render() {
    const { name, content } = this.props.commentInfo;
    //Về bản chất có thể ko gọi mapStateToProps vẫn có thể lấy được state từ store redux về
    // console.log(store.getState());
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <p>Name</p>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onInput={this.handleChange}
          />
        </div>
        <div className="form-group">
          <p>Content</p>
          <input
            type="text"
            id="content"
            className="form-control"
            value={content}
            onInput={this.handleChange}
          />
        </div>
        <div className="form-group mt-2">
          <button className="btn btn-success me-2">Comment</button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              const action = {
                type: "UPDATE_COMMENT",
                // payload: this.props.index,
                // chỗ này không nhất thiết phải có payload vì chắc chắn là commentInfo thay đổi, nhưng chắc chắn phải có type
                //mobx, recoil: cung la middleware quan ly state
              };
              this.props.dispatch(action);
            }}
          >
            Update
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  commentInfo: state.commentReducer.commentInfo,
});

export default connect(mapStateToProps)(FormComment);
