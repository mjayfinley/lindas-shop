import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './main.css';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import cart from './store/reducers/cart';
import product from './store/reducers/product';

import Products from './components/Products';
import Cart from './components/Cart';
import ItemDetails from './components/ItemDetails';
import AddProduct from './components/AddProduct';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  productReducer : product,
  cartReducer : cart,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App>
        <Switch>
          <Route exact path = '/' component = {Products} />
          <Route path = '/itemdetails/:id' component = {ItemDetails} />
          <Route path = '/cart' component = {Cart} />
          <Route path = '/addproduct' component = {AddProduct} />
        </Switch>
      </App>
    </Provider>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
