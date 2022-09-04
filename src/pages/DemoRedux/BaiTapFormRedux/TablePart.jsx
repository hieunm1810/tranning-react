import React, { Component } from "react";
import { connect } from "react-redux";

class TablePart extends Component {
  deleteSinhVien = (sinhVienDel) => {
    const action = {
        type: "DELETE_SINHVIEN",
        payload: sinhVienDel
    }
    this.props.dispatch(action);
  };
  editSinhVien = (sinhVienEdit) => {
    const action = {
        type: "EDIT_SINHVIEN",
        payload: sinhVienEdit
    }
    this.props.dispatch(action);
  }
  render() {
    const { sinhVienArr } = this.props;
    return (
      <div>
        <table className="table mt-3">
          <thead className="bg-dark text-white">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>SĐT</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {sinhVienArr.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.id}</td>
                  <td>{element.name}</td>
                  <td>{element.phone}</td>
                  <td>{element.email}</td>
                  <td className="d-flex justify-content-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.deleteSinhVien(element);
                      }}
                    >
                      Xoá
                    </button>
                    <button className="btn btn-primary ms-2" onClick={() => {
                        this.editSinhVien(element);
                    }}>Sửa</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  sinhVienArr: state.sinhVienReducer.sinhVienArr,
});

export default connect(mapStateToProps)(TablePart);
