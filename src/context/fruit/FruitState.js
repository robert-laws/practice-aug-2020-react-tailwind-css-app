import React, { useReducer } from 'react';
import FruitContext from './fruitContext';
import fruitReducer from './fruitReducer';
import { GET_FRUIT } from '../types';
import { fruitData } from '../../data/fruitData';

const FruitState = ({ children }) => {
  const initialState = {
    fruit: [],
  };

  const [state, dispatch] = useReducer(fruitReducer, initialState);

  const getFruit = () => {
    dispatch({ type: GET_FRUIT, payload: fruitData });
  };

  return (
    <FruitContext.Provider
      value={{
        fruit: state.fruit,
        getFruit,
      }}
    >
      {children}
    </FruitContext.Provider>
  );
};

export default FruitState;
