import * as types from '../constants/ActionTypes';
import { getJSON } from 'helpers/API';

export function loadBooks() {
  return (dispatch) => {
    getJSON('books', (err, payload) => {
      if (err) {
        dispatch({
          type: types.LOAD_BOOKS,
          payload: err,
          error: true
        });
      } else {
        dispatch({
          type: types.LOAD_BOOKS,
          payload
        });
      }
    });
  };
}

export function loadBook(id) {
  return (dispatch) => {
    getJSON(`books/${id}`, (err, payload) => {
      if (err) {
	dispatch({
          type: types.LOAD_BOOK,
          payload: err,
          error: true
	});
      } else {
	console.log(payload);
	dispatch({
          type: types.LOAD_BOOK,
          payload
	});
      }
    });
  };
}

export function addBook(data) {
  return {
    type: types.ADD_BOOK,
    payload: data
  };
}
