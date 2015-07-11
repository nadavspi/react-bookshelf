import React from 'react';
import { Route } from 'react-router';
import Root from '../screens/index';
import Bookshelf from '../screens/Bookshelf/index';
import Book from '../screens/Bookshelf/screens/Book/index';
import About from '../screens/About/index';

export default (
  <Route path="/" component={Root}>
    <Route path="bookshelf" component={Bookshelf}>
      <Route path=":id" components={Book} />
    </Route>
    <Route path="about" component={About} />
  </Route>
);
