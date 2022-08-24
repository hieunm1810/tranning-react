import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
    render() {
        return (
            <div>
                <p>
                    Không tìm thấy thông tin ! Quay về <NavLink to={""}>Trang chủ</NavLink>
                </p>
            </div>
        )
    }
}
