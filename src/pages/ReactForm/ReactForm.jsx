import React, { Component } from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";
import axios from "axios";

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: "1",
        name: "product 1",
        price: 1000,
        img: "https://picsum.photos/50/50",
        description: "description",
        productType: "mobile",
      },
      {
        id: "2",
        name: "product 2",
        price: 1000,
        img: "https://picsum.photos/50/50",
        description: "description",
        productType: "tablet",
      },
    ],

    productEdit: {
      id: "",
      name: "",
      price: 0,
      img: "",
      description: "",
      productType: "",
    },
  };

  updateProduct = (prodUpdate) => {
    let prod = this.state.arrProduct.find((p) => p.id == prodUpdate.id);
    if (prod) {
      prod.name = prodUpdate.name;
      prod.price = prodUpdate.price;
      prod.description = prodUpdate.description;
      prod.productType = prodUpdate.productType;
      prod.img = prodUpdate.img;
    }

    //set lại state
    this.setState({
      arrProduct: this.state.arrProduct,
    });
  };

  addProduct = (newProduct) => {
    console.log(newProduct);
    this.state.arrProduct.push(newProduct);
    //setState
    this.setState(
      {
        arrProduct: this.state.arrProduct,
      },
      this.luuStore
    );
  };

  delProduct = (idDel) => {
    console.log(idDel);
    let arrProductUpdate = this.state.arrProduct.filter(
      (element) => element.id !== idDel
    );
    this.setState(
      {
        arrProduct: arrProductUpdate,
      },
      this.luuStore
    );
  };

  editProduct = (prodClick) => {
    this.setState({
      productEdit: prodClick,
    });
  };

  luuStore = () => {
    localStorage.setItem("arrProduct", JSON.stringify(this.state.arrProduct));
  };

  layStore = () => {
    if (localStorage.getItem("arrProduct")) {
      let arrProduct = JSON.parse(localStorage.getItem("arrProduct"));
      return arrProduct;
    }

    return [];
  };

  render() {
    console.log("abc");
    return (
      <div className="container">
        <h3>Product management</h3>
        <FormProduct
          addProduct={this.addProduct}
          productEdit={{ ...this.state.productEdit }}
          updateProduct={this.updateProduct}
        />
        <TableProduct
          arrProduct={this.state.arrProduct}
          delProduct={this.delProduct}
          editProduct={this.editProduct}
        />
      </div>
    );
  }

  componentDidMount() {
    //Hàm này sẽ thực thi sau khi nội dung được render
    // this.setState({
    //   arrProduct: this.layStore()
    // });

    //lấy api
    let promise = axios({
      url: "http://svcy.myclass.vn/api/Product/GetAll",
      method: "GET",
    });

    promise.then((result) => {
      this.setState({
        arrProduct: result.data,
      });
    });

    promise.catch(err => {
      console.log(err);
    })
  }
}
