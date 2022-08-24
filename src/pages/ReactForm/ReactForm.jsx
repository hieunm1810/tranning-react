import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'

export default class ReactForm extends Component {

  state = {
    arrProduct: [
      { id: "1", name: "product 1", price: 1000, img: "https://picsum.photos/50/50", description: "description", productType: "mobile" },
      { id: "2", name: "product 2", price: 1000, img: "https://picsum.photos/50/50", description: "description", productType: "tablet" }
    ]
  }

  addProduct = (newProduct) => {
    console.log(newProduct);
    this.state.arrProduct.push(newProduct);
    //setState
    this.setState({
      arrProduct: this.state.arrProduct
    },this.luuStore);
  }

  delProduct = (idDel) => {
    console.log(idDel);
    let arrProductUpdate = this.state.arrProduct.filter(element => element.id !== idDel);
    this.setState({
      arrProduct: arrProductUpdate
    }, this.luuStore);

  }

  luuStore = () => {
    localStorage.setItem("arrProduct", JSON.stringify(this.state.arrProduct));
  }

  layStore = () => {
    if(localStorage.getItem("arrProduct")) {
      let arrProduct = JSON.parse(localStorage.getItem("arrProduct"));
      return arrProduct;
    }

    return [];
  }

  render() {
    return (
      <div className="container">
        <h3>Product management</h3>
        <FormProduct addProduct={this.addProduct} />
        <TableProduct arrProduct={this.state.arrProduct} delProduct={this.delProduct} />
      </div>
    )
  }

  componentDidMount() {
    //Hàm này sẽ thực thi sau khi nội dung được render
    this.setState({
      arrProduct: this.layStore()
    });
  }
}
