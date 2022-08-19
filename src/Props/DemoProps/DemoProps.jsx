import React, { Component } from 'react'
import ProductCard from './ProductCard'

const data = [
    { id: 1, name: "Hieu", age: 18 },
    { id: 2, name: "Lap", age: 19 },
    { id: 3, name: "Duyen", age: 20 },
]

export default class DemoProps extends Component {
    renderPerson = () => {
        return data.map((person) => {
            return <div className="col-3" key={person.id}>
                <ProductCard item={person}/>
            </div>
        })
    }
    render() {

        let person = {
            id: 1,
            name: "Hieu",
            age: 18
        }

        let person2 = {
            id: 2,
            name: "Lap",
            age: 17
        }

        return (
            <div className="container">
                {/* Neu su dung cac component giong nhau, neu 1 component trong do truyen props thi cac component giong nhau khac cung phai truyen, neu khong se xuat hien loi  */}
                <div className="row">
                    {this.renderPerson()}
                </div>
            </div>
        )
    }
}
