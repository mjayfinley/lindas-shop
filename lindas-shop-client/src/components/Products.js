import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actionCreators from '../store/actionCreators'

import Sidebar from './Sidebar'
import Categories from './Categories'


class Products extends Component {
  constructor(props) {
    super(props)
    this.props.onPopulateProducts()


  }




  render() {

    let productList = this.props.products.map((product) => {
      return (
        <div key={product.id}>
          <div>
            <img src={product.image1} alt="1" />
            <div>
              <h4 >${product.price}</h4>
              <h4>{product.product_name}</h4>
              <button onClick={() => {this.props.showProductDetails(product)}}><Link to = {`/itemdetails/${product.id}`}>Details</Link></button>
              <button onClick={() => this.props.addToCart(product)}>Quick Add</button>
            </div>
          </div>
        </div>
      )
    })


    return(
      <div>
        <div>
          <Sidebar />
          <Categories />
        </div>
        <div>
          {productList}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products : state.productReducer.products,
    cart : state.cartReducer.cart,
    cartTotal : Math.round(state.cartReducer.total * 100) / 100
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPopulateProducts : () => dispatch(actionCreators.populateProductsUsingThunk()),

    showProductDetails : (product) => dispatch(actionCreators.showProductDetails(product)),



    addToCart : (product) => dispatch(actionCreators.addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
