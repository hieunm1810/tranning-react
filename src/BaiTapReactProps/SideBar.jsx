import React, { Component } from 'react'

export default class SideBar extends Component {
  render() {
    return (
      <>
        <ul className="d-flex flex-column list-unstyled justify-content-center px-4 border border-start-0 border-end-0" style={{minHeight: "70vh"}}>
            <li className="text-center border border-info border-start-0 py-1"><a href="#" className="text-decoration-none text-dark">Home</a></li>
            <li className="text-center py-1"><a href="#" className="text-decoration-none text-secondary">Shop</a></li>
        </ul>
      </>
    )
  }
}
