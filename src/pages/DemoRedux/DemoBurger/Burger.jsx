import React, { Component } from "react";
import { connect } from "react-redux";

class Burger extends Component {
  renderBurger = () => {
    const { burger } = this.props;

    return burger.reduce((preValue, curValue, curIndex) => {
      if (curValue.id === "salad") {
        for (let i = 0; i < curValue.quantity; i++) {
          preValue.push(<div className="salad" key={curValue.id + i}></div>);
        }
        return preValue;
      }
      if (curValue.id === "beef") {
        for (let i = 0; i < curValue.quantity; i++) {
          preValue.push(<div className="beef" key={curValue.id + i}></div>);
        }
        return preValue;
      }

      if (curValue.id === "cheese") {
        for (let i = 0; i < curValue.quantity; i++) {
          preValue.push(<div className="cheese" key={curValue.id + i}></div>);
        }
        return preValue;
      }
    }, []);
  };
  render() {
    return (
      <div className="container">
        <div className="breadTop"></div>
        {/* <div className="cheese"></div>
        <div className="beef"></div>
        <div className="salad"></div> */}
        {this.renderBurger()}

        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer.burger,
});

export default connect(mapStateToProps)(Burger);
