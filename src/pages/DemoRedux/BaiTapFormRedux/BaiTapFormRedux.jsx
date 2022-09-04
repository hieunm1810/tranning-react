import React, { Component } from "react";
import { connect } from "react-redux";
import FormPart from "./FormPart";
import TablePart from "./TablePart";

class BaiTapFormRedux extends Component {
  render() {
    return (
      <div className="container pt-3">
        <FormPart />
        <TablePart />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(BaiTapFormRedux);
