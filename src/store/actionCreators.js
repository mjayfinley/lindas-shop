import * as actionTypes from './actionTypes'

export const populateProductsUsingThunk = () => {
  return (dispatch) => {

    fetch("http://www.mocky.io/v2/5b5f50e12e0000980c694904")
    .then(response => response.json())
    .then((json) => {
      dispatch({type : actionTypes.POPULATE_PRODUCTS, products : json})
    })
  }
}
