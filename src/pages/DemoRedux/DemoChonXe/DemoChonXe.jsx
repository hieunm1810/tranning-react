//rcredux
/*
    Xoá export trên component
    xoá mapDispatchProps
 */
import React, { Component } from "react";
import { connect } from "react-redux";

class DemoChonXe extends Component {
  render() {
    return <div>DemoChonXe</div>;
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(DemoChonXe);
