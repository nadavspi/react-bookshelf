import React from 'react';
import { Connector } from 'redux/react';
import { bindActionCreators } from 'redux';
import * as BookActions from 'actions/BookActions';
import BookList from './components/BookList';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  render() {
    return (
      <Connector>
        {this.renderChild}
      </Connector>
    );
  },

  renderChild({ books, dispatch }) {
    const actions = bindActionCreators(BookActions, dispatch);

    return (
      <div>
        <h2>Bookshelf</h2>
        {this.props.children ? (
	  React.cloneElement(
            this.props.children,
	    { actions, books, ...this.props }
	  )
         ) : (
           <BookList
           books={books}
	   actions={actions}
           />
         )}
      </div>
    );
  }
});
