import React, { Component } from 'react'

export default class ProductCard extends Component {
  render() {
    //this.props: thuoc tinh co san cua react class component dung de nhan gia tri tu component cha truyen vao
    /*
        so sanh: state & props
        giong nhau: Deu la thuoc tinh co san cua react class component dung de binding du lieu ra giao dien
        khac nhau: state co the gan lai gia tri thong qua phuong thuc setState, props khong the gan lai gia tri (readonly) dung de nhan gia tri tu component cha truyen vao.

        optional chaning: ? => neu co gia tri thi lam khong co gia tri thi bo qua

     */
    // this.props.name = "abc" khong the gan lai props
    const {item} = this.props;
    return (
      <div className="card">
        <img src={`https://i.pravatar.cc?u=${item?.age}`} alt="..." />
        <div className="card-body">
            <p>Name: {item?.name}</p>
            <p>Age: {item?.age}</p>
        </div>
      </div>
    )
  }
}
