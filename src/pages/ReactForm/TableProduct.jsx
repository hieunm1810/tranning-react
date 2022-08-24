import React, { Component } from 'react'

export default class TableProduct extends Component {
    render() {
        let { arrProduct, delProduct } = this.props;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>img</th>
                        <th>name</th>
                        <th>price</th>
                        <th>type</th>
                        <th>description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {arrProduct.map((element, index) => {
                        return (
                            <tr key={index}>
                                <td>{element.id}</td>
                                <td><img src={element.img} width={50} alt="..." /></td>
                                <td>{element.name}</td>
                                <td>{element.price}</td>
                                <td>{element.productType}</td>
                                <td>{element.description}</td>
                                <td>
                                    <button className="btn btn-danger mx-2" onClick={() => {
                                        delProduct(element.id);
                                    }}>Del</button>
                                    <button className="btn btn-primary mx-2">Edit</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        )
    }
}
