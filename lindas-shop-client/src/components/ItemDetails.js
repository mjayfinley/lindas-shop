import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import Sidebar from './Sidebar'

import * as actionCreators from '../store/actionCreators'


class ItemDetails extends Component {


  render() {


    let listItem = this.props.item.map((product) => {
      return (
        <div key={product.id}>
          <div>
            <div>

              <img src={product.image1} alt={product.product_name}/>
              <img src={product.image2} alt='image2' />
            </div>
            <div >
              <img src={product.image3} alt='image3'/>
            </div>
          </div>
          <div >
            <h4>${product.price}</h4>
            <h4>{product.product_name}</h4>
            <p>{product.description}</p>
          </div>

        </div>
      )
    })

    return(
      <div>
        <div>
          <Sidebar />
          <div>
            <div>
              {listItem}
            </div>
            <div>
              <button onClick={() => {this.props.addToCart(this.props.item[0])}}>Add to Cart</button>
              <button><Link to = '/'>Continue Shopping</Link></button>
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
