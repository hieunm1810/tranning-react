import React, { Component } from "react";

export default class ShoesItem extends Component {
    
    render() {
        let {item} = this.props;
        return (
            <div className="card">
                <img
                    src={item.image}
                    alt="..."
                    className="card-img-top"
                />
                <div className="card-body">
                    <h3>{item.name}</h3>
                    <p>{item.price + " $"}</p>
                    <button className="btn bg-dark text-white">
                        add to carts
                    </button>
                </div>
            </div>
        );
    }
}
