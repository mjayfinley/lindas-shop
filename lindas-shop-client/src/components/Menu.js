import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

export class Menu extends Component {
  render() {
    return(
      <div id="menu">
        <div><h1>Linda's Shop</h1></div>
        <div><NavLink exact to = '/'>Products</NavLink></div>
        <div><NavLink to = '/cart'>Cart</NavLink></div>
      </div>
    )
  }
}
