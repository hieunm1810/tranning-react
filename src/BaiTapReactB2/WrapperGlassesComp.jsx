import React, { Component } from "react";
import style from "./BaiTapReactB2.module.scss";
import myData from "../data/dataGlasses.json";
export default class WrapperGlassesComp extends Component {
  renderGlasses = () => {
    let glassesImg = [];
    let index = 0;
    for (const glass of myData) {
      let imgTag = <img key={index++} src={glass["url"]} alt="..." onClick={() => {
        this.props.stateChanged(glass);
      }}/>
      glassesImg.push(imgTag);
    }
    return glassesImg;
  };

  render() {
    return (
      <>
        <div className={`container bg-white ${style["wrapper__glasses"]}`}>{this.renderGlasses()}</div>
      </>
    );
  }
}
