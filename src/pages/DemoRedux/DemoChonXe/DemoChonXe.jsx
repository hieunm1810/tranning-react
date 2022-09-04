//rcredux
/*
    Xoá export trên component
    xoá mapDispatchProps
 */
import React, { Component } from "react";
import { connect } from "react-redux";

class DemoChonXe extends Component {
  changeColor = (color) => {
    const action = {
      type: "CHANGE_IMG",
      payload: `./img/products/${color}-car.jpg`,
    };
    this.props.dispatch(action);
  };
  render() {
    return (
      <div className="container">
        <h3>Demo chon xe</h3>
        <div className="row">
          <div className="col-6">
            <img src={this.props.img} alt="car" className="w-100" />
          </div>
          <div className="col-6 d-flex">
            <div className="mx-2">
              <button className="btn btn-danger" onClick={() => {
                this.changeColor("red");
              }}>
                Red
              </button>
            </div>
            <div className="mx-2">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  this.changeColor("silver");
                }}
              >
                Silver
              </button>
            </div>
            <div className="mx-2">
              <button
                className="btn btn-dark"
                onClick={() => {
                 this.changeColor("black");
                }}
              >
                Black
              </button>
            </div>
            <div className="mx-2">
              <button
                className="btn btn-warning"
                onClick={() => {
                  this.changeColor("steel");
                }}
              >
                Steel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  img: state.img,
});

export default connect(mapStateToProps)(DemoChonXe);
