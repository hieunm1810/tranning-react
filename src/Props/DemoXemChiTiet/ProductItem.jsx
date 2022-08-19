import React, { Component } from "react";

export default class ProductItem extends Component {
    render() {
        let {product:phone, xemChiTiet} = this.props;
        console.log(phone);
        return (
            <div>
                <div className="card">
                    <img
                        src={phone["hinhAnh"]}
                        alt="..."
                        className="card-img-top"
                        height={400}
                    />
                    <div className="card-body">
                        <h3>{phone["tenSP"]}</h3>
                        <p>{phone["giaBan"]}</p>
                        <button
                            className="btn btn-success"
                            onClick={() => {
                                xemChiTiet(phone);
                                // console.log(this);
                            }}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
