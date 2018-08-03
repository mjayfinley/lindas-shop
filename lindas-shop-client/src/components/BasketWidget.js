import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'

class BasketWidget extends Component {

  render() {
    return(
      <div>
        <div>
          <Link to='/cart'><i/><span>{this.props.cartCount} items(s) - ${this.props.total}</span></Link>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return{
    total : Math.round(state.cartReducer.total * 100) / 100,
    cartCount : state.cartReducer.cartCount
  }
}

export default connect(mapStateToProps, null)(BasketWidget)
