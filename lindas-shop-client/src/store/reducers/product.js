import * as actionTypes from '../actionTypes'

const initialState = {
  products : [],
  item : [],
  pageOfItems : [],
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

    case actionTypes.SHOW_PRODUCT_DETAILS:
      return {
        ...state,
        item : action.product
    }

    case actionTypes.LOAD_MORE_PRODUCTS:
      return {
        ...state,
        pageOfItems : action.pageOfItems

      }
    default:
      return state

  }

}

export default reducer
