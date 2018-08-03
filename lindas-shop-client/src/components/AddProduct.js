import React, {Component} from 'react'
import {connect} from 'react-redux'

import * as actionCreators from '../store/actionCreators'


class AddProduct extends Component {

  constructor(props) {
    super(props)

    this.state = {
      product : {}
    }
  }


  handleTextChange = (e) => {
    this.setState({
      product : {
        ...this.state.product,
        [e.target.name] : e.target.value
      }
    })
  }


  render() {
    return(
      <div>
        <h1>Add Product</h1>

        <input name="product_name" onChange={this.handleTextChange} type="text" placeholder="product name" />
        <input name="description" onChange={this.handleTextChange} type="text" placeholder="description of product" />
        <input name="price" onChange={this.handleTextChange} type="number" placeholder="price" />
        <input name="quantity" onChange={this.handleTextChange} type="number" placeholder="quantity" />
        <input name="category" onChange={this.handleTextChange} type="text" placeholder="category" />
        <input name="image1" onChange={this.handleTextChange} type="text" placeholder="image url" />
        <input name="image2" onChange={this.handleTextChange} type="text" placeholder="image url" />
        <input name="image3" onChange={this.handleTextChange} type="text" placeholder="image url" />

        <button onClick={() => {this.props.onSaveProduct(this.state.product)}}>Add Product</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products : state.products
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveProduct : (product) => dispatch(actionCreators.addProductUsingThunk(product))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct)
