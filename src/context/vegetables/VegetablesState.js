import React, { useReducer } from 'react';
import VegetablesContext from './vegetablesContext';
import vegetablesReducer from './vegetablesReducer';
import { GET_VEGETABLES } from '../types';
import { vegetablesData } from '../../data/vegetablesData';

const VegetablesState = ({ children }) => {
  const initialState = {
    vegetables: [],
  };

  const [state, dispatch] = useReducer(vegetablesReducer, initialState);

  const getVegetables = () => {
    dispatch({ type: GET_VEGETABLES, payload: vegetablesData });
  };

  return (
    <VegetablesContext.Provider
      value={{
        vegetables: state.vegetables,
        getVegetables,
      }}
    >
      {children}
    </VegetablesContext.Provider>
  );
};

export default VegetablesState;
