// relative path until I can get Mocha to resolve correctly
import * as types from '../constants/ActionTypes';

const initialState = {
  isFetching: false,
  items: [],
  data: {}
};

export function books(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_BOOKS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case types.RECEIVE_BOOKS:
      const { items, data } = action.payload;

      return Object.assign({}, state, {
        isFetching: false,
        items,
        data
      });

    case types.ADD_BOOK:
      const { payload } = action;

      return Object.assign({}, state, {
        items: [...state.items, payload.id],
        data: { ...state.data, [payload.id]: payload }
      });

    default:
      return state;
  }
}

export function errorMessage(state = null, action) {
  switch (action.type) {
    case types.SET_ERROR:
      return action.error;

    case types.RESET_ERROR:
      return null;

    default:
      return state;
  }
};
