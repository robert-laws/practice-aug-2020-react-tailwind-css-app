import React from 'react';
import FruitState from './fruit/FruitState';
import VegetablesState from './vegetables/VegetablesState';

const Store = ({ children }) => {
  return (
    <FruitState>
      <VegetablesState>{children}</VegetablesState>
    </FruitState>
  );
};

export default Store;
