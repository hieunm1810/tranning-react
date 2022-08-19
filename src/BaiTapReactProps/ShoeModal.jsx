import React, { Component } from 'react'

export default class ShoeModal extends Component {
    render() {
        let {id,name,alias,price,description,shortDescription,quantity,image} = this.props.stateObj.shoeObj;
        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">
                                <div className="">
                                    <img src={image} alt="..." className="mw-100" />
                                </div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td className="fw-bold">id</td>
                                            <td>{id}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">name</td>
                                            <td>{name}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">alias</td>
                                            <td>{alias}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">price</td>
                                            <td>{price}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Description</td>
                                            <td>{description}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Short Description</td>
                                            <td>{shortDescription}</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-bold">Quantity</td>
                                            <td>{quantity}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
