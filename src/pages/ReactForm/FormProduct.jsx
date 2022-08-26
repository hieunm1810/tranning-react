import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    productInfo: {
      id: "",
      name: "",
      price: "",
      productType: "mobile",
      description: "",
      img: "",
    },
    error: {
      id: "",
      name: "",
      price: "",
      description: "",
      img: "",
    },
  };
  handleChange = (event) => {
    let { value, id } = event.target;

    let dataType = event.target.getAttribute("data-type");
    // xu ly productInfo
    let newValue = this.state.productInfo;
    newValue[id] = value;
    //xu ly error
    let newError = this.state.error;
    let messError = "";
    if (value.trim() === "") {
      messError = id + " không được bỏ trống !";
    } else {
      if (dataType == "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          messError = id + " phải là số";
        }
      }
    }
    newError[id] = messError;
    //setState
    this.setState(
      {
        productInfo: newValue,
        error: newError,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (event) => {
    //chan su kien reload cua browser
    event.preventDefault();
    // console.log(this.state);

    //khi ng dung bam nut submit => gui du lieu ng dung nhap tu state => ra ham addProduct
    this.props.addProduct({ ...this.state.productInfo });
  };

  static getDerivedStateFromProps(newProps, currentState) {
    // console.log(newProps.productEdit);
    currentState.productInfo = newProps.productEdit;

    return currentState;
  }
  render() {
    let { id, name, description, img, price, productType } = this.state.productInfo;
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-warning">Create product</div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>id</p>
              <input
                value={id}
                type="text"
                className="form-control"
                id="id"
                name="id"
                onInput={this.handleChange}
              />
              {/* onInput se truyen vao mot bien co the dat la event */}
              <p className="text-danger">{this.state.error.id}</p>
            </div>
            <div className="form-group">
              <p>name</p>
              <input
                value={name}
                type="text"
                className="form-control"
                id="name"
                name="name"
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.error.name}</p>
            </div>
            <div className="form-group">
              <p>price</p>
              <input
                value={price}
                data-type="number"
                type="text"
                className="form-control"
                id="price"
                name="price"
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.error.price}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>img</p>
              <input
                value={img}
                type="text"
                className="form-control"
                id="img"
                name="img"
                onInput={this.handleChange}
              />
              <p className="text-danger">{this.state.error.img}</p>
            </div>
            <div className="form-group">
              <p>product type</p>
              <select
                value={productType}
                name="productType"
                id="productType"
                className="form-select"
                onInput={this.handleChange}
              >
                <option value="mobile">mobile</option>
                <option value="tablet">tablet</option>
                <option value="laptop">laptop</option>
              </select>
            </div>
            <div className="form-group">
              <p>description</p>
              <textarea
                value={description}
                type="text"
                className="form-control"
                id="description"
                name="description"
                onInput={this.handleChange}
              ></textarea>
              <p className="text-danger">{this.state.error.description}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-success mx-2">Create</button>
          <button type="button" className="btn btn-primary" onClick={() => {
            this.props.updateProduct({...this.state.productInfo});
          }}>Update</button>
        </div>
      </form>
    );
  }
}
