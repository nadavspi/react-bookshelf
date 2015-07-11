import React from 'react';
import { Route } from 'react-router';
import Root from '../screens/index';
import Bookshelf from '../screens/Bookshelf/index';
import Book from '../screens/Bookshelf/screens/Book/index';
import About from '../screens/About/index';
import Admin from '../screens/Admin/index';
import AdminBookshelf from '../screens/Admin/screens/Bookshelf/index';
import AdminAddBook from '../screens/Admin/screens/Bookshelf/screens/AddBook/index';

export default (
  <Route path="/" component={Root}>
    <Route path="bookshelf" component={Bookshelf}>
      <Route path=":id" components={Book} />
    </Route>
    <Route path="about" component={About} />
    <Route path="admin" component={Admin}>
      <Route path="bookshelf" component={AdminBookshelf}>
	<Route path="add" component={AdminAddBook} />
      </Route>
    </Route>
  </Route>
);
