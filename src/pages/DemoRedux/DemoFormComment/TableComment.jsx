import React, { Component } from "react";
import { connect } from "react-redux";

class TableComment extends Component {
  render() {
    const { arrComment } = this.props;
    return (
      <div>
        <div className="img">
          <img src="https://i.pravatar.cc?u=20" alt="..." height={200} />
        </div>
        {arrComment.map((element, index) => {
          return (
            <div className="row mt-2 align-items-center" key={index}>
              <div className="col-2">
                <img
                  src={`https://i.pravatar.cc?u=${index + 1}`}
                  alt="..."
                  width={50}
                />
              </div>
              <div
                className="col-8 rounded"
                style={{ background: "rgba(0,0,0,0.1)", padding: 15 }}
              >
                <h3>{element.name}</h3>
                <p>{element.content}</p>
                <div style={{ textAlign: "right" }}>
                  <button
                    className="btn btn-danger me-2"
                    onClick={() => {
                      const action = {
                        type: "DELETE_COMMENT",
                        payload: index,
                      };
                      this.props.dispatch(action);
                    }}
                  >
                    Xoá
                  </button>
                  <button className="btn btn-primary" onClick={() => {
                    const action = {
                      type: "EDIT_COMMENT",
                      payload: index,
                    }
                    this.props.dispatch(action);
                  }}>Sửa</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrComment: state.commentReducer.arrComment,
});

export default connect(mapStateToProps)(TableComment);
