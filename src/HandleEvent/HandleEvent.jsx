import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = (e) => {
    alert("hello cybersoft");
  };
  showMess = (name) => {
    alert(`Hello ${name}`);
  }
  render() {
    return (
      <div className="container">
        <button
          id="btnClick"
          onClick={(e) => {
            alert("Hello cybersoft");
          }}
        >
          Click me
        </button>
          {/* cach o duoi ko dung dau () cho ham vi minh chi truyen function vao chu minh ko truc tiep goi function tu do   */}
        <button className="btn btn-primary ms-2" onClick={this.handleClick}>
          Click
        </button>
        <hr />
        <h3>Handle click params</h3>
        <button onClick={(e) => {
            //goi cac ham khac thuc thi khi click
            this.showMess("Hieu");
        }}>Show mess</button>
        <button className="btn btn-primary ms-2" onClick={this.showMess.bind(this, "Lap")}>Show mess</button>
      </div>
    );
  }
}
