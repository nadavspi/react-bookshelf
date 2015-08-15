import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    data: React.PropTypes.object.isRequired
  },

  render() {
    const { items, data } = this.props;
    const books = items.map((id) => {
      const book = data[id];

      return (
        <li key={id}>
          <Link to={`/bookshelf/${id}`}>
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
