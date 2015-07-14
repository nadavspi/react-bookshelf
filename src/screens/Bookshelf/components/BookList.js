import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  propTypes: {
    books: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  },

  componentDidMount() {
    this.props.actions.loadBooks();
  },

  render() {
    console.log(this.props);
    const books = this.props.books.map((book) => {
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
        <h2>I am the book list</h2>
	<ol>
          {books}
	</ol>
      </div>
    );
  }
});
