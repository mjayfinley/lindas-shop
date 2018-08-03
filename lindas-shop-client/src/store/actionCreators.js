import * as actionTypes from './actionTypes'
import * as actionCreators from './actionCreators.js'

export const populateProductsUsingThunk = () => {
  return (dispatch) => {

    fetch("http://localhost:3001/products")
    .then(response => response.json())
    .then((json) => {
      dispatch({type : actionTypes.POPULATE_PRODUCTS, products : json})
    })
  }
}

export const addProductUsingThunk = (product) => {
  return (dispatch) => {
    fetch("http://localhost:3001/add-product", {
      method : "POST",
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(product)
    })
    .then(response => response.json())
    .then((json) => {
      dispatch({type : actionTypes.ADD_PRODUCT, product : json})
    })
  }
}

export const loadFirstPage = () => {
  return (dispatch) => {

    fetch("http://localhost:3001/products")
    .then(response => response.json())
    .then((json) => {
      dispatch(actionCreators.onChangePage(json.slice(0, 6)))
    })
  }
}

export const showProductDetails = (product) => {
  return {
    type : actionTypes.SHOW_PRODUCT_DETAILS,
    product : product
  }
}

export const addToCart = (product) => {
  return {
    type : actionTypes.ADD_PRODUCT_TO_CART,
    product : product
  }
}

export const deleteItem = (product) => {
  return {
    type: actionTypes.DELETE_PRODUCT_FROM_CART,
    product : product
  }
}

export const onChangePage = (pageOfItems) => {
  return {
    type: actionTypes.LOAD_MORE_PRODUCTS,
    pageOfItems : pageOfItems

  }
}

export const onPageLoad = (firstPageItems) => {
  return {
    type: actionTypes.POPULATE_PRODUCTS,
    products : firstPageItems

  }
}

export const filterForCategory = (category, products) => {
  var filtered = products.filter((product) => {


    if(product.category == category) {
      return product

    }
  })
  return {
    type: actionTypes.FILTER_CATEGORY,
    filtered : filtered

  }
}
