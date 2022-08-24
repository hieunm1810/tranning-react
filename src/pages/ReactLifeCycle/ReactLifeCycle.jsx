import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifeCycle extends Component {

    //một component sinh ra nó sẽ có những caí hàm lifecycle bất kể có gọi hay không gọi thì nó vẫn sẽ chạy

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1
        }
        console.log("constructor");
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log("getDrivedStateFromProps");
        // currentState.number = 20;
        return currentState;
        //return ở đây như kiểu thông báo là props state có gì update hay không, chứ có vẻ ko tác động vào state.
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate");
        return true;
    }


    render() {
        console.log("render");
        return (
            <div className="container">
                <h3>Number: {this.state.number}</h3>
                <button className="btn btn-success" onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    });
                }}>+</button>
                <h3>Like: {this.state.like}</h3>
                <button className="btn btn-success" onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}>Like</button>
                <Child number={this.state.number} />
            </div>
        )
    }

    componentDidMount() {
        console.log("componentdidmount");
        //tuong tu window.onload
    }
}

/*
    Lifecycle
    + Mounting: 
        + Các hàm sẽ tự kích hoạt khi sử dụng 1 component. Dùng để can thiệp vào quá trình trước khi render hoặc sau khi render nhằm mục đích xử lý state và props 
        + Can thiệp thay đổi state trước render (sử dụng getDerivedStateFromProps)
        + Can thiệp thay đổi state sau render sử dụng ComponentDidMount()
        + ComponentDidMount chỉ chạy 1 lần duy nhất khi component load lần đầu tiên (Thường dùng để call api)

 */
