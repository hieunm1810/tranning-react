import React, { Component } from 'react'
import Child from './Child';

export default class ReactLifeCycle extends Component {

    //một component sinh ra nó sẽ có những caí hàm lifecycle bất kể có gọi hay không gọi thì nó vẫn sẽ chạy

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1,

            objectNumber: {
                number: 1
            },
            count: 60
        }
        console.log("constructor");
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log("getDrivedStateFromProps");
        console.log(currentState);
        // currentState.number = 20;
        return null;
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
                <h3>Number: {this.state.objectNumber.number}</h3>
                <button className="btn btn-success" onClick={() => {
                    let objectNumber = { ...this.state.objectNumber };
                    console.log(objectNumber);
                    //hoac su dung let objectNumber = {...this.state.objectNumber} thay spread attribute
                    objectNumber.number++;
                    this.setState({
                        objectNumber: objectNumber
                    });
                }}>+</button>
                <h3>Like: {this.state.like}</h3>
                <button className="btn btn-success" onClick={(event) => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}>Like</button>
                <Child objectNumber={this.state.objectNumber} />
                <br />
                Count: {this.state.count}
            </div>
        )
    }
    timeout = {};
    componentDidMount() {
        console.log("componentdidmount");
        //tuong tu window.onload
        // chỉ chạy 1 lần khi component load lần đầu tiên
        // this.timeout = setInterval(() => {
        //     this.setState({
        //         count: this.state.count - 1,
        //     })
        //     console.log(this.state.count);
        // }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        //handle sau khi component gọi render
        //Tuy nhiên hạn chế setState tại đây => setState phải có lệnh if
        console.log(prevProps);
        console.log(prevState);
    }

    componentWillUnmount() {
        //component mất đi khi đạt tới một điều kiện gì cho dev quy định hoặc chuyển root
        //trước khi component mất khỏi giao diện => clear tất cả script chạy ngầm
        clearInterval(this.timeout);
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
