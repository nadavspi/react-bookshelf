import * as types from '../constants/ActionTypes';
import { setError, resetError } from './ErrorActions';
import { getJSON, postJSON } from 'helpers/API';

// TODO: actually use promises

function normalize(payload) {
  return {
    items: payload.map(item => item.id),
    data: payload.reduce((items, item) => {
      items[item.id] = item;
      return items;
    }, {})
  };
}

function requestBooks() {
  return {
    type: types.REQUEST_BOOKS
  };
}

function receiveBooks(payload) {
  return {
    type: types.RECEIVE_BOOKS,
    payload: normalize(payload)
  };
}

function setBooks(payload) {
  return {
    type: types.RECEIVE_BOOKS,
    payload
  };
}

function fetchBooks() {
  return (dispatch) => {
    dispatch(requestBooks());

    getJSON('books', (err, payload) => {
      dispatch(receiveBooks(payload));
    });
  };
}

export function fetchBooksIfNeeded() {
  return (dispatch, getState) => {
    if (getState().books.items.length) {
      return Promise.resolve();
    }

    return dispatch(fetchBooks());
  };
}

function addBookOptimistically(payload) {
  return {
    type: types.ADD_BOOK,
    payload
  };
}

export function addBook(payload) {
  return (dispatch, getState) => {
    const previousState = getState().books;

    // If book by that ID already exists
    if (previousState.items.indexOf(payload.id) !== -1) {
      return dispatch(setError('There is already a book with that ID.'));
    }

    dispatch(addBookOptimistically(payload));

    postJSON('books', payload, (statusCode) => {
      if (statusCode === 201) {
	return Promise.resolve();
      }

      dispatch(setError('Failed to save.'));
      return dispatch(setBooks(previousState));
    });
  };
}
