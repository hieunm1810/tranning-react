import React, { Component, PureComponent } from 'react'
/*
    PureComponent là component không có lifecycle ShouldComponentUpdate tuy nhiên đã hỗ trợ việc xử lý render khi Props thay đổi và không render khi props không thay đổi. 
    Lưu ý: 
        So sánh props ở đây chỉ là dạng shallow compare - nhận biết được (primitive value): number, string, boolean, undefined...
        Đối với reference value thì khi cập nhật state ở component cha phải sử dụng {...spread operator}
 */
export default class Child extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
        console.log("constructor child");
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log("getDrivedStateFromProps child");
        console.log(currentState);
        return null;
    }

    // shouldComponentUpdate(newProps, newState) {
    //     //newProps: là props mới trước khi render
    //     //this.props: là props hiện tại
    //     if (this.props.number !== newProps.number) {
    //         console.log("shouldComponentUpdate child");
    //         return true;
    //     }
    //     return false

    // }


    render() {
        console.log("render");
        // console.log(this.props);
        return (
            <div className="container p-5 display-4 bg-dark text-white">
                <h2>Child component: {this.props.objectNumber.number}</h2>
            </div>
        )
        
    }

    componentDidMount() {
        console.log("componentdidmount child");
    }

    componentDidUpdate(prepProps, prevState) {

    }
}
