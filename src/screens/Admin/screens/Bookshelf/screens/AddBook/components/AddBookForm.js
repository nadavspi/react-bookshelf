import React from 'react';
import slug from 'slug';
import { postJSON } from 'API';

export default React.createClass({
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

    postJSON('books', data, () => {
      this.setState(this.getInitialState);
    });
  },

  render () {
    const { title, author } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
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
