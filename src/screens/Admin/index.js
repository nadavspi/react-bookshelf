import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  render () {
    return (
      <div>
        <h1>Admin</h1>
        <nav>
          <Link to="/admin/bookshelf/add">Add a book</Link>
        </nav>
        {this.props.children}
      </div>
    );
  }
});
