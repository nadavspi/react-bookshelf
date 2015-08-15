import React from 'react';
import { Router } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import routes from './config/routes';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { Provider } from 'react-redux';
import * as reducers from 'reducers';

const reducer = combineReducers(reducers);

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducer);

const Root = () => {
  return (
    <Router history={history} children={routes} />
  );
};

React.render((
  <Provider store={store}>
    {Root}
  </Provider>
), document.getElementById('root'));
