import React, { Component } from "react";
import style from "./BaiTapReactB2.module.scss";

export default class WrapperImgComp extends Component {
  render() {
    return (
      <>
        <div className={`${style["wrapper__img"]}`}>
          <div className={`${style["wrapper__img-item"]}`}>
            <img src="./img/glassesImage/model.jpg" alt="..." className={`${style["model"]}`}/>
            <img src="./img/glassesImage/v1.png" alt="..." className={`${style["glasses"]}`}/>
            <div className={`${style["wrapper__img-item-detail"]}`}>
                <h5>FENDI</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos explicabo nihil</p>
            </div>
          </div>
          <div className={`${style["wrapper__img-item"]}`}>
            <img src="./img/glassesImage/model.jpg" alt="..." className={`${style["model"]}`}/>
            <img src={this.props.stateInitial.glassObj["url"]} alt="" className={`${style["glasses"]}`}/>
            <div className={`${style["wrapper__img-item-detail"]}`}>
                <h5>{this.props.stateInitial.glassObj["name"]}</h5>
                <p>{this.props.stateInitial.glassObj["desc"]}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
