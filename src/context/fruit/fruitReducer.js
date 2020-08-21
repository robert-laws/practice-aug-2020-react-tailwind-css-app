import { GET_FRUIT } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_FRUIT:
      return {
        ...state,
        fruit: [...state.fruit, ...action.payload],
      };

    default:
      return state;
  }
};
