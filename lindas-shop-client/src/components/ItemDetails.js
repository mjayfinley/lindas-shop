import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import * as actionCreators from '../store/actionCreators'


class ItemDetails extends Component {


  render() {

    console.log(this.props.item)

    let listItem = this.props.item.map((product) => {
      return (
        <li key={product.id}>
          <h2>{product.product_name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.image1} alt="1"/>
          <img src={product.image2} alt="2"/>
          <img src={product.image3} alt="3"/>

          <button onClick={() => {this.props.addToCart(product)}}><Link to = '/cart'>Add to Cart</Link></button>
        </li>
      )
    })

    return(
      <div id="product-details">

        <h1>Item Details</h1>
        <ul>{listItem}</ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    item : [state.productReducer.item]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart : (product) => dispatch(actionCreators.addToCart(product))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemDetails)
