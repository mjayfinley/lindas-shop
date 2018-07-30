import React, {Component} from 'react'
import {connect} from 'react-redux'
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
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.image1} alt="image 1" />
          <img src={product.image2} alt="image 2" />
          <img src={product.image3} alt="image 3" />
          <button onClick={() => {this.props.addProductToCart(product)}}>Add to Cart</button>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
