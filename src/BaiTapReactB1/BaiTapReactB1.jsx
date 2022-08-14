import React, { Component } from 'react'
import CarouselComp from './CarouselComp'
import ContentComp from './ContentComp'
import FooterComp from './FooterComp'
import HeaderComp from './HeaderComp'

export default class BaiTapReactB1 extends Component {
  render() {
    return (
      <div>
        <HeaderComp />
        <CarouselComp />
        <ContentComp />
        <FooterComp />
      </div>
    )
  }
}
