import React from 'react';
import AddBookForm from './components/AddBookForm';

export default React.createClass({
  render () {
    return (
      <div>
	<h3>Add a book</h3>
	<AddBookForm />
      </div>
    );
  }
});
