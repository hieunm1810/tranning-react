import React, { Component } from 'react'
import ItemProduct from './ItemProduct';

export default class ProductList extends Component {
    
    renderProductItem = () => {
        let {products, openModal} = this.props;
        // console.log(this.props);
        return products.map((product) => {
            return <div className="col-3" key={product.id}>
                <ItemProduct car={product} openModal={openModal}/>
            </div>
        });
    }

    render() {
        return (
            <div>
                <h3>Product list</h3>
                <div className="row">
                    {this.renderProductItem()}
                </div>
            </div>
        )
    }
}
