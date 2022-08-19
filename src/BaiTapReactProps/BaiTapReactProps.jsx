import React, { Component } from 'react'
import ShoesShop from './ShoesShop';
import SideBar from './SideBar';


export default class BaiTapReactProps extends Component {
    render() {
        return (
            <div className="d-flex pt-1">
                <div className="w-25">
                    <SideBar />
                </div>
                <div className="w-75 px-5 pt-2 border border-primary">
                    <ShoesShop />
                </div>
            </div>
        )
    }
}
