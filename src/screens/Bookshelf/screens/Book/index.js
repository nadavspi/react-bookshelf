import React from 'react';

export default React.createClass({
  propTypes: {
    params: React.PropTypes.object.isRequired,
    books: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  },

  componentDidMount () {
    const { id } = this.props.params;
    this.props.actions.loadBook(id);
  },

  render () {
    console.log(this.props.books);

    return (
      <div>
        Woohoo
      </div>
    );
  }
});
