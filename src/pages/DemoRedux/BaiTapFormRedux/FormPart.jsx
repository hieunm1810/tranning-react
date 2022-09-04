import React, { Component } from "react";
import { connect } from "react-redux";

class FormPart extends Component {
  handleChange = (event) => {
    const { id, value } = event.target;
    const action = {
      type: "CHANGE_INPUT",
      payload: {
        id,
        value,
      },
    };
    this.props.dispatch(action);
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const action = {
      type: "ADD_SINHVIEN",
      payload: this.props.sinhVien,
    };
    this.props.dispatch(action);
  };

  updateSinhVien = (sinhVien) => {
    const action = {
      type: "UPDATE_SINHVIEN",
      payload: sinhVien,
    };
    this.props.dispatch(action);
  };
  render() {
    const { id, name, phone, email } = this.props.sinhVien;
    const { disabled } = this.props;
    return (
      <div>
        <h3 className="bg-dark text-white py-3 ps-4">Thông tin sinh viên</h3>
        <form className="row" onSubmit={this.handleSubmit}>
          <div className="col-6">
            <div className="form-group">
              <p>Mã SV</p>
              <input
                type="text"
                className="form-control"
                id="id"
                value={id}
                onInput={this.handleChange}
                disabled={disabled ? true : false}
              />
            </div>
            <div className="form-group">
              <p>Số điện thoại</p>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={phone}
                onInput={this.handleChange}
              />
            </div>
            <button
              className="btn text-white mt-3 me-2"
              style={{ backgroundColor: "green" }}
            >
              Thêm sinh viên
            </button>
            <button
              type="button"
              className="btn text-white mt-3 btn-secondary"
              onClick={() => {
                this.updateSinhVien(this.props.sinhVien);
              }}
            >
              Cập nhật
            </button>
            {/* <button type="reset" className="btn btn-warning">Reset</button> */}
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Họ tên</p>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onInput={this.handleChange}
              />
            </div>
            <div className="form-group">
              <p>Email</p>
              <input
                type="text"
                className="form-control"
                id="email"
                value={email}
                onInput={this.handleChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sinhVien: state.sinhVienReducer.sinhVienObj,
  disabled: state.sinhVienReducer.disabled,
});

export default connect(mapStateToProps)(FormPart);
