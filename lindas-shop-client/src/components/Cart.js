import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actionCreators from '../store/actionCreators'

class Cart extends Component {
  render() {

    let cartList = this.props.cart.map((product) => {
      return (
        <li key={product.id}>
          <h2>{product.product_name}</h2>
          <p>${product.price}</p>
          <button onClick={() => {this.props.onDeleteItem(product)}}>Delete Item</button>
        </li>
      )
    })
    return(
      <div id="cart">
        <h1>Cart</h1>

        <ul>{cartList}</ul>


        <div>
          Cart Total: ${this.props.total}
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart : state.cartReducer.cart,
    total : Math.round(state.cartReducer.total * 100) /100
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteItem : (product) => dispatch(actionCreators.deleteItem(product))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
