import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import * as actionCreators from '../store/actionCreators'


class ItemDetails extends Component {


  render() {


    let listItem = this.props.item.map((product) => {
      return (
        <div className='thumbnail' key={product.id}>
          <div className='row'>
            <div className='col-md-6'>

              <img className='img-thumbnail' src={product.image1} alt={product.product_name}/>
              <img className='img-thumbnail' src={product.image2} alt='image2' />
            </div>
            <div className='col-md-6'>
              <img className='img-thumbnail' src={product.image3} alt='image3'/>
            </div>
          </div>
          <div className='caption-full'>
            <h4 className='pull-right'>${product.price}</h4>
            <h4>{product.product_name}</h4>
            <p>{product.description}</p>
          </div>

        </div>
      )
    })

    return(
      <div className="view-container">
        <div className='container'>
          <div className='row'>
            <div className='col-md-9'>
              {listItem}
            </div>
            <div className='col-md-3'>
              <button className='btn btn-primary pull-right' onClick={() => {this.props.addToCart(this.props.item[0])}}><Link to = '/cart'>Add to Cart</Link></button>
              <button className='btn btn-primary pull-right'><Link to = '/'>Continue Shopping</Link></button>
            </div>
          </div>
        </div>
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
