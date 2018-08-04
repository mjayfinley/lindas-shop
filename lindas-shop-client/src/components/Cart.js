import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import * as actionCreators from '../store/actionCreators'

class Cart extends Component {

  constructor(props) {
    super(props)

    this.props.populateCart()


  }

  render() {

    let cartList = this.props.cart.map((product, index) => {
      return (
        <li key={index}>
          <h2>{product.product_name}</h2>
          <p>${product.price}</p>
          <button onClick={() =>  {this.props.onDeleteItem(product); this.props.deleteFrontEnd(product)}}>Delete Item</button>
        </li>
      )
    })
    return(
      <div>
        <h1>Cart</h1>

        <ul>{cartList}</ul>

        <div>
          Total Items: {this.props.cartCount}
        </div>
        <div>
          Cart Total: ${this.props.total}
        </div>

        <div>
          <button>Checkout</button>
        </div>

        <div>
          <button><Link to = '/'>Continue Shopping</Link></button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart : state.cartReducer.cart,
    total : Math.round(state.cartReducer.total * 100) /100,
    cartCount: state.cartReducer.cartCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteItem : (product) => dispatch(actionCreators.deleteItem(product)),

    deleteFrontEnd : (product) => dispatch(actionCreators.deleteItemFrontEnd(product)),

    populateCart : () => dispatch(actionCreators.populateCart()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
