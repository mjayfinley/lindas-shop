import * as actionTypes from '../actionTypes'

const initialState = {
  cart : [],
  total : 0.00
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cart : state.cart.concat(action.product),
        total : state.total += action.product.price 
      }

    case actionTypes.DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        cart : state.cart.filter(product => product !== action.product),
        total : state.total -= action.product.price
    }

  }
  return state
}

export default reducer
