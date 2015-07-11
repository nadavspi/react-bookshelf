import React from 'react';
import { getJSON } from 'API';

export default React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired
  },

  getInitialState () {
    return {
      error: null,
      book: {}
    };
  },

  componentDidMount () {
    const { id } = this.props.params;
    getJSON(`books/${id}`, this.loadBook);
  },

  loadBook (err, book) {
    if (err) {
      this.setState({
        error: err
      });
    } else {
      this.setState({
        error: null,
        book
      });
    }
  },

  render () {
    const { book } = this.state;

    return (
      <div>
        <h1>{book.title}</h1>
        <h2>{book.author}</h2>
        Woohoo
      </div>
    );
  }
});
