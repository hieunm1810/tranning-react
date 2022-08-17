import React, { Component } from "react";
import BaiTapChonXe from "../BaiTap/BaiTapChonXe";
import BaiTapTangGiamFont from "../BaiTap/BaiTapTangGiamFont";

export default class StateDemo extends Component {
  //state: la thuoc tinh co san cua react class component, dung de chua cac gia tri thay doi tren giao dien. Khi state thay doi thi giao dien se tu render lai
  state = {
    login: false, // false: chua dang nhap, true: dang nhap
    stateA: "a",
    stateB: "b",
  };

  renderLogin = () => {
    if (this.state.login) {
      return (
        <div>
          <span className="text-light">Hello cybersoft</span>
          <button
            className="btn btn-danger"
            onClick={() =>
              this.setState(
                { login: false } //react co the tu tao lai nhung state cu ko ghi
              )
            }
          >
            Đăng xuất
          </button>
        </div>
      );
    }
    return (
      <button
        className="btn btn-outline-success"
        onClick={() => {
          //goi ham de dang nhap
          this.handleLogin();
        }}
      >
        Đăng nhập
      </button>
    );
  };

  handleLogin = () => {
    // this.state.login = true; khong duoc thay doi state truc tiep ma phai thong qua phuong thuc setState
    // let newState = { login: true }; // co the ko can tao newState nhu v
    //this.setState la phuong thuc co san cua react class component, lam thay doi gia tri state cu dong thoi render lai giao dien
    // setState la phuong thuc bat dong bo
    this.setState({ login: true }, () => {
      //ham nay se tu goi sau khi setState va render xong
      console.log(this.state);
    });

    //console.log(this.state); neu de o ngoai nhu vay thi state se ra ket qua ko dung, vi setState la bat dong bo nen no can co thoi gian xu ly (ngoai cach tren con co the su dung async await)
  };
  render() {
    return (
        // thẻ này có tác dụng bao bọc bên ngoài như thẻ div nhưng sẽ ko render ra html 
      <> 
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          />
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="#">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <div className="d-flex my-2 my-lg-0 align-items-center">
              {/* cach nay cung phai yeu cau co the boc ben ngoai */}
              {/* {this.login ? <span className="text-light">Hello cybersoft</span> : <button className="btn btn-outline-success">Đăng nhập</button>} */}
              {this.renderLogin()}
            </div>
          </div>
        </nav>
        <hr />
        <h3>Bài tập chọn xe</h3>
        <BaiTapChonXe />
        {/* <BaiTapTangGiamFont /> */}
      </>
    );
  }
}
