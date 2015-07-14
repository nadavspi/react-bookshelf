import { LOAD_BOOKS } from 'constants/ActionTypes';

export default function books(state = [], action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.payload;

    default:
      return state;
  }
}
