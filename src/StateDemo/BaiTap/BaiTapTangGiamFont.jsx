import React, { Component } from "react";

export default class BaiTapTangGiamFont extends Component {
  state = {
    fontSize: 16,
  };
  render() {
    return (
      <div className="container">
        <h3>Bài tập tăng giảm fontSize</h3>
        <p style={{ fontSize: this.state.fontSize }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          fugiat in facilis totam molestias facere. Repellendus expedita ab
          cupiditate, impedit laudantium consequatur, quam architecto deserunt
          fugiat, autem possimus error tempore?
        </p>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            this.setState({
              fontSize: ++this.state.fontSize,
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            this.setState({
              fontSize: --this.state.fontSize
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
