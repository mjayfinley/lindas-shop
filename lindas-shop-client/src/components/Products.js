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
        <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={product.id}>
          <div className="thumbnail">
            <img className="img-thumbnail" src={product.image1} alt="1" />
            <div className='caption'>
              <h4 className="pull-right">${product.price}</h4>
              <h4>{product.product_name}</h4>
              <button className='itemButton btn btn-primary' onClick={() => {this.props.showProductDetails(product)}}><Link to = '/itemdetails'>Details</Link></button>
            </div>
          </div>
        </div>
      )
    })

    return(
      <div>
        <h1>Products</h1>
        <div className='books row'>
          {productList}
        </div>
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

    showProductDetails : (product) => dispatch(actionCreators.showProductDetails(product)),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
