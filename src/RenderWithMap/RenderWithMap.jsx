import React, { Component } from "react";

const data = [
    {
        id: 1,
        name: "Red car",
        price: 1000,
        img: "./img/products/red-car.jpg"
    },
    {
        id: 2,
        name: "Black car",
        price: 1000,
        img: "./img/products/black-car.jpg",
    },
    {
        id: 3,
        name: "Silver car",
        price: 1000,
        img: "./img/products/silver-car.jpg",
    },
    {
        id: 4,
        name: "Steel car",
        price: 1000,
        img: "./img/products/steel-car.jpg",
    },
];

export default class RenderWithMap extends Component {
    renderProduct = () => {
        // cach 1
        // const arrTrJSx = [];
        // let index = 0;
        // for (const product of data) {
        //     let tr = <tr>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img src={product.img} alt="..." width={100} /></td>
        //     </tr>;
        //     arrTrJSx.push(tr);
        // }
        // return arrTrJSx;

        //cach 2: dung map
        return data.map((product, index) => {
            // key chi can truyen mot gia tri duy nhat, id hoac index deu dc
            return (<tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img src={product.img} alt="..." width={100} /></td>
            </tr>);
        });

    }
    render() {
        // thuoc tinh key trong moi object cua react se chua gia tri unique de phan biet nhung thanh phan do voi nhau
        return (
            <>
                <h3>Render table product</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>img</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                    </tbody>
                </table>
            </>
        );
    }
}
