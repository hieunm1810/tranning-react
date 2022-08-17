import React, { Component } from 'react'
import style from './StyleWithJSX.module.scss'; //css nay chi ap dung cho rieng component nay thoi, bat buoc phai co ten phu la module
// luc nay react se xem style la mot object va nhung css ben trong style la thuoc tinh nen phai truy xuat theo cach khac
// => cach nay chi dung khi component nay se bi thay doi boi js. VD nhu light theme, dark theme,...
export default class StyleWithJSX extends Component {
  render() {
    const abc = "ok";
    return (
      <div>
        <h3>Style With JSX</h3>
        <p className="text-red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolore ipsum optio tempora eius quisquam doloremque unde aspernatur, explicabo natus molestias, ducimus quas veniam odit porro, accusantium impedit nihil. Sapiente?</p>
        <h3 className={`p-2 bg-dark text-light ${style["text-blue"]}`}>hello front end 28</h3>
        <hr />
        <p style={{color: "blue", background: "url(https://picsum.photos/500)", height: 500}}>hello cybersoft</p> 
        {/* truyen truc tiep style vao the bang cach binding ket hop voi object: {{}} thi object ben trong giong viec dom toi style cua the  
        => cach nay dung khi css cua mot the ko co dinh, vi du nhu background se thay doi dua vao du lieu tu api thi phai dung cach nay
        */}
      </div>
    )
  }
}
