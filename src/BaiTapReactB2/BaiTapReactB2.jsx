import React, { Component } from "react";
import style from "./BaiTapReactB2.module.scss";
import WrapperGlassesComp from "./WrapperGlassesComp";
import WrapperImgComp from "./WrapperImgComp";
export default class BaiTapReactB2 extends Component {
  state = {
    glassObj: {
      id: "",
      name: "",
      url: "",
      desc: "",
    },
  };

  updateState = (newGlassObj) => {
    this.setState({
      glassObj: newGlassObj,
    });
  };

  render() {
    return (
      <div className={`${style["wrapper"]}`}>
        <div className={`${style["wrapper__overlay"]}`}></div>
        <h1 className="text-white text-center py-4">TRY GLASSES APP ONLINE</h1>
        <WrapperImgComp stateInitial={this.state} />
        <WrapperGlassesComp stateInitial={this.state} stateChanged={this.updateState}/>
      </div>
    );
  }
}
