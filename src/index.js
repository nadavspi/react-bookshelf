import React from 'react';
import { Router } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import routes from './config/routes';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from 'stores';

const redux = createRedux(stores);

const Root = () => {
  return (
    <Router history={history} children={routes} />
  );
};

React.render((
  <Provider redux={redux}>
    {Root}
  </Provider>
), document.getElementById('root'));
