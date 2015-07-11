import React from 'react';
import { Link } from 'react-router';
import { getJSON } from 'API';

export default React.createClass({
  getInitialState () {
    return {
      error: null,
      books: []
    };
  },

  componentDidMount () {
    getJSON('books', this.loadBooks);
  },

  loadBooks (err, books) {
    if (err) {
      this.setState({
        error: err
      });
    } else {
      this.setState({
        error: null,
        books
      });
    }
  },

  render () {
    const books = this.state.books.map((book) => {
      return (
        <li key={book.id}>
          <Link to={`/bookshelf/${book.id}`}>
            {book.title}
          </Link>
        </li>
      );
    });

    return (
      <div>
        {this.state.error}
        <h2>I am the book list</h2>
	<ol>
          {books}
	</ol>
      </div>
    );
  }
});
