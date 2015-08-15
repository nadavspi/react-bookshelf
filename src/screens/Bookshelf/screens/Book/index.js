import React from 'react';

export default React.createClass({
  propTypes: {
    author: React.PropTypes.string,
    title: React.PropTypes.string
  },

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <dl>
          <dt>Author</dt>
          <dd>{this.props.author}</dd>
        </dl>
      </div>
    );
  }
});
