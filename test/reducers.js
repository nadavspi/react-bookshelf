import expect from 'expect';
import * as types from '../src/shared/constants/ActionTypes';
import { books, errorMessage } from '../src/shared/reducers';

const initialState = {
  isFetching: false,
  items: [],
  data: {}
};

describe('books reducer', () => {
  it('should return the initial state', () => {
    expect(
      books(undefined, {})
    ).toEqual(initialState);
  });

  it('should return the current state', () => {
    const state = {
      isFetching: false,
      items: ['infinite-jest'],
      data: {
        'infinite-jest': {
          id: 'infinite-jest',
          title: 'Infinite Jest',
          author: 'David Foster Wallace'
        }
      }
    };

    expect(
      books(state, {})
    ).toEqual(state);
  });

  it('should set isFetching for REQUEST_BOOKS', () => {
    expect(
      books(undefined, { type: types.REQUEST_BOOKS }).isFetching
    ).toBe(true);
  });

  it('should handle ADD_BOOK', () => {
    const payload = {
      'id': 'infinite-jest',
      'title': 'Infinite Jest',
      'author': 'David Foster Wallace'
    };

    const nextState = {
      isFetching: false,
      items: ['infinite-jest'],
      data: {
        'infinite-jest': {
          id: 'infinite-jest',
          title: 'Infinite Jest',
          author: 'David Foster Wallace'
        }
      }
    };

    expect(
      books(initialState, {
        type: types.ADD_BOOK,
        payload
      })).toEqual(nextState);
  });
});


describe('errorMessage reducer', () => {
  it('should handle SET_ERROR', () => {
    expect(
      errorMessage(undefined, { type: types.SET_ERROR, error: 'I AM AN ERROR' })
    ).toBe('I AM AN ERROR');
  });

  it('should return the error', () => {
    expect(
      errorMessage('HEY', {})
    ).toBe('HEY');
  });

  it('should handle RESET_ERROR', () => {
    expect(
      errorMessage('HEY', { type: types.RESET_ERROR })
    ).toBe(null);
  });
});
