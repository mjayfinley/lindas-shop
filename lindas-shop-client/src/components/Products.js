import React, {Component} from 'react'
import Pagination from './Pagination'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as actionCreators from '../store/actionCreators'


class Products extends Component {

  componentDidMount() {
    this.props.onPopulateProducts()
    this.props.loadFirstPage()
  }




  render() {

    let productList = this.props.pageOfItems.map((product) => {
      return (
        <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={product.id}>
          <div className="thumbnail">
            <img className="img-thumbnail" src={product.image1} alt="1" />
            <div className='caption'>
              <h4 className="pull-right">${product.price}</h4>
              <h4>{product.product_name}</h4>
              <button className='itemButton btn btn-primary pull-right' onClick={() => {this.props.showProductDetails(product)}}><Link to = {`/itemdetails/${product.id}`}>Details</Link></button>
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
        <Pagination items={this.props.products} onChangePage={this.props.onChangePage.bind(this)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products : state.productReducer.products,
    pageOfItems : state.productReducer.pageOfItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPopulateProducts : () => dispatch(actionCreators.populateProductsUsingThunk()),

    loadFirstPage: () =>
    dispatch(actionCreators.loadFirstPage()),

    showProductDetails : (product) => dispatch(actionCreators.showProductDetails(product)),


    onChangePage : (pageOfItems) => dispatch(actionCreators.onChangePage(pageOfItems))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
