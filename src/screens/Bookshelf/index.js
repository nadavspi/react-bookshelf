import React from 'react';
import { connect } from 'react-redux';
import { fetchBooksIfNeeded } from 'actions/BookActions';
import BookList from './components/BookList';

const Bookshelf = React.createClass({
  propTypes: {
    children: React.PropTypes.object,
    params: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired,
    isFetching: React.PropTypes.bool.isRequired,
    items: React.PropTypes.array.isRequired,
    data: React.PropTypes.object.isRequired
  },

  componentDidMount() {
    this.props.dispatch(fetchBooksIfNeeded());
  },

  render() {
    const {
      isFetching,
      children,
      data,
      params,
      items
    } = this.props;

    if (isFetching) {
      return (
        <h1>Loading</h1>
      );
    }

    return (
      <div>
        {children ? (
          React.cloneElement(
            children,
            data[params.id]
          )
         ) : (
           <BookList
	     items={items}
             data={data}
           />
         )}
      </div>
    );
  },
});

export default connect(state => state.books)(Bookshelf);
