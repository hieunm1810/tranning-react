import React, { Component } from 'react'

export default class ItemProduct extends Component {
    render() {
        let { car, openModal } = this.props;
        return (
            <div>
                <div className="card">
                    <img src={car.img} alt="..." className="card-img-top" />
                    <div className="card-body">
                        <h3>{car.name}</h3>
                        <p>{car.price}</p>
                        <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#modelId" onClick={openModal.bind(this,car)}>Xem chi tiết</button>
                    </div>
                </div>
            </div>
        )
    }
}
