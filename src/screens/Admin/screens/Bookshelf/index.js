import React from 'react';

export default React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },

  render () {
    return (
      <div>
	{this.props.children}
      </div>
    );
  }
});
