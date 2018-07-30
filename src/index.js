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

ReactDOM.render(
  <BrowserRouter>
    <Provider >
      <App>
        <Switch>
          <Route exact path = '/' component = {Products} />
          <Route path = '/cart' component = {Cart} />
        </Switch>
      </App>
    </Provider>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
