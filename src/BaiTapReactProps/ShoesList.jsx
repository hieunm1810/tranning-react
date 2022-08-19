import React, { Component } from 'react'
import ShoesItem from './ShoesItem'

export default class ShoesList extends Component {
    renderShoes = () => {
        let {shoes, openModal} = this.props;
        return shoes.map((item) => {
            return <div className="col-4" key={item.id}>
                <ShoesItem shoeItem={item} openModal={openModal}/>
            </div>
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderShoes()}
            </div>
        )
    }
}
