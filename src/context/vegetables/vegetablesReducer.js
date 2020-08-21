import { GET_VEGETABLES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_VEGETABLES:
      return {
        ...state,
        vegetables: [...state.vegetables, ...action.payload],
      };

    default:
      return state;
  }
};
