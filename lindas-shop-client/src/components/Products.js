import React, {Component} from 'react'
import Pagination from './Pagination'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actionCreators from '../store/actionCreators'

import Sidebar from './Sidebar'


class Products extends Component {

  componentDidMount() {
    this.props.onPopulateProducts()
    this.props.loadFirstPage()
  }




  render() {

    let productList = this.props.pageOfItems.map((product) => {
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
          <Sidebar clase/>
        </div>
        <div>
          {productList}
        </div>
        <Pagination items={this.props.products} onChangePage={this.props.onChangePage.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products : state.productReducer.products,
    pageOfItems : state.productReducer.pageOfItems,
    cart : state.cartReducer.cart,
    cartTotal : Math.round(state.cartReducer.total * 100) / 100
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPopulateProducts : () => dispatch(actionCreators.populateProductsUsingThunk()),

    loadFirstPage: () =>
    dispatch(actionCreators.loadFirstPage()),

    showProductDetails : (product) => dispatch(actionCreators.showProductDetails(product)),


    onChangePage : (pageOfItems) => dispatch(actionCreators.onChangePage(pageOfItems)),

    addToCart : (product) => dispatch(actionCreators.addToCart(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
