import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  render () {
    return (
      <div>
        <nav>
          <Link to="/bookshelf">Bookshelf</Link>{' '}
          <Link to="/about">About</Link>{' '}
        </nav>
        {this.props.children}
      </div>
    );
  }
});
