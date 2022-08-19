import React, { Component } from 'react'

export default class ShoesItem extends Component {
    render() {
        let {shoeItem, openModal} = this.props;
        return (
            <div>
                <div className="card">
                    <img src={shoeItem.image} alt="..." className="card-img-top" />
                    <div className="card-body">
                        <h3>{shoeItem.name}</h3>
                        <p className="my-0">{shoeItem.price}</p>
                        <button className="btn bg-dark text-white" data-bs-toggle="modal" data-bs-target="#modelId" onClick={() => {
                            openModal(shoeItem);
                        }}>
                            add to carts <i className="fa-solid fa-cart-arrow-down" />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
