import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actionCreators from '../store/actionCreators'


class Products extends Component {

  componentDidMount() {
    this.props.onPopulateProducts()
  }


  render() {

    let productList = this.props.products.map((product) => {
      return (
        <li key={product.id}>
          <h2>{product.product_name}</h2>
          <img src={product.image1} alt="1" />
          <p>${product.price}</p>
          <button onClick={() => {this.props.showProductDetails(product)}}><Link to = '/itemdetails'>Details</Link></button>
        </li>
      )
    })

    return(
      <div id="products">
        <h1>Products</h1>
        <ul>{productList}</ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products : state.productReducer.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPopulateProducts : () => dispatch(actionCreators.populateProductsUsingThunk()),

    showProductDetails : (product) => dispatch(actionCreators.showProductDetails(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
