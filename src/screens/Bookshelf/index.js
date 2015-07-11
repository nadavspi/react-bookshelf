import React from 'react';
import BookList from './components/BookList';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  render () {
    return (
      <div>
        <h2>Bookshelf</h2>
        {this.props.children ? (
          this.props.children
         ) : (
           <BookList />
         )}
      </div>
    );
  }
});
