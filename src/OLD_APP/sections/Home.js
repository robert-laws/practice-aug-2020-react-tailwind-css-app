import React, { useEffect, useContext, useCallback } from 'react';
import Header from './Header';
import Container from './Container';
import Card from '../components/Card';
import FruitContext from '../context/fruit/fruitContext';
import VegetablesContext from '../context/vegetables/vegetablesContext';

const Home = () => {
  const fruitContext = useContext(FruitContext);
  const { fruit, getFruit } = fruitContext;

  const vegetablesContext = useContext(VegetablesContext);
  const { vegetables, getVegetables } = vegetablesContext;

  const fruitCallback = useCallback(getFruit, []);
  const vegetablesCallback = useCallback(getVegetables, []);

  useEffect(() => {
    fruitCallback();
    vegetablesCallback();
  }, [fruitCallback, vegetablesCallback]);

  return (
    <>
      <Header />
      <Container>
        <div className='flex flex-wrap'>
          {fruit.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              img={`./img/${item.img}`}
              tags={item.tags}
            />
          ))}
        </div>
        <div className='flex flex-wrap'>
          {vegetables.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              img={`./img/${item.img}`}
              tags={item.tags}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Home;
