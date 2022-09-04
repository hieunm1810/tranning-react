import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
    tinhTongTien = () => {
        //đối với những gia trị có thể tính toán đc dựa trên những data có sẵn thì mình ko cần để vào state
        const {burger} = this.props;
        return burger.reduce((total, item, index) => {
            return total += item.quantity * item.price;
        }, 0 );
    }
  render() {
    const { burger } = this.props;
    return (
      <div>
        <h3>Menu</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Topping</th>
              <th>Quantity</th>
              <th>price</th>
            </tr>
          </thead>
          <tbody>
            {burger.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.id}</td>
                  <td>
                    <button className="btn btn-primary mx-2 " onClick={() => {
                        const action = {
                            type: "CHANGE_TOPPING",
                            payload: {
                                id: element.id,
                                quantity: 1,
                            }
                        };
                        this.props.dispatch(action);
                    }}>+</button>
                    {element.quantity}
                    <button className="btn btn-primary mx-2 " onClick={() => {
                        const action = {
                            type: "CHANGE_TOPPING",
                            payload: {
                                id: element.id,
                                quantity: -1,
                            }
                        };
                        this.props.dispatch(action);
                    }}>-</button>
                  </td>
                  <td>{element.price}</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan={2}></td>
              <td>Total: {this.tinhTongTien()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.burgerReducer.burger,
});

export default connect(mapStateToProps)(Menu);
