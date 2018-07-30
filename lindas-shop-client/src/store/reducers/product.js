import * as actionTypes from '../actionTypes'

const initialState = {
  products : []
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    case actionTypes.POPULATE_PRODUCTS:
      return {
        ...state,
        products : action.products
      }

    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products : state.products.concat(action.product)
      }
  }

  return state

}

export default reducer
