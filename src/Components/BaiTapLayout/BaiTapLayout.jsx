import React, { Component } from "react";
import BTContent from "./BTContent";
import BTFooter from "./BTFooter";
import BTHeader from "./BTHeader";
import BTNavigation from "./BTNavigation";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <BTHeader />
        <div className="d-flex">
          <div className="w-25">
            <BTNavigation />
          </div>
          <div className="w-75">
            <BTContent />
          </div>
        </div>
        <BTFooter />
      </div>
    );
  }
}
