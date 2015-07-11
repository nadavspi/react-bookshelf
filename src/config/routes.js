import React from 'react';
import { Route } from 'react-router';
import Root from '../screens';
import Bookshelf from '../screens/Bookshelf';
import Book from '../screens/Bookshelf/screens/Book';
import About from '../screens/About';
import Admin from '../screens/Admin';
import AdminBookshelf from '../screens/Admin/screens/Bookshelf';
import AdminAddBook from '../screens/Admin/screens/Bookshelf/screens/AddBook';

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
