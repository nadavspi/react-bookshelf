import React from 'react';
import slug from 'slug';
import { connect } from 'react-redux';
import { addBook } from 'actions/BookActions';

// TODO: Move redux stuff up to parent so this can be dumb

const AddBookForm = React.createClass({
  propTypes: {
    dispatch: React.PropTypes.func.isRequired
  },

  getInitialState () {
    return {
      title: '',
      author: ''
    };
  },

  handleChange (field, event) {
    const { value } = event.target;

    this.setState({
      [field]: value
    });
  },

  handleSubmit (event) {
    // will need some validation
    event.preventDefault();

    const data = {
      id: slug(this.state.title, { lower: true }),
      ...this.state
    };

    this.props.dispatch(addBook(data));
  },

  renderErrorMessage() {
    if (!this.props.errorMessage) {
      return null;
    }

    return (
      <h2 className="error">Error: {this.props.errorMessage}</h2>
    );
  },

  render () {
    const { title, author } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderErrorMessage()}
        <fieldset>
          <legend>Book info</legend>

          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={title}
              required
              onChange={this.handleChange.bind(this, 'title')}
              />
          </div>

          <div>
            <label htmlFor="author">Author</label>
            <input
              id="author"
              name="author"
              type="text"
              value={author}
              required
              onChange={this.handleChange.bind(this, 'author')}
              />
          </div>
        </fieldset>

        <input type="submit" value="Save"/>
      </form>
    );
  }
});

function mapStateToProps(state) {
  return {
    errorMessage: state.errorMessage
  };
}

export default connect(mapStateToProps)(AddBookForm);
