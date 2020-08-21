import React, { useEffect, useContext } from 'react';
import Card from './components/Card';
import Header from './sections/Header';
import Container from './sections/Container';
import FruitContext from './context/fruit/fruitContext';
import VegetablesContext from './context/vegetables/vegetablesContext';

function App() {
  const fruitContext = useContext(FruitContext);
  const { fruit, getFruit } = fruitContext;

  const vegetablesContext = useContext(VegetablesContext);
  const { vegetables, getVegetables } = vegetablesContext;

  useEffect(() => {
    getFruit();
    getVegetables();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className='flex flex-wrap'>
          {fruit.map((item) => (
            <Card key={item.name} name={item.name} img={`./img/${item.img}`} />
          ))}
        </div>
        <div className='flex flex-wrap'>
          {vegetables.map((item) => (
            <Card key={item.name} name={item.name} img={`./img/${item.img}`} />
          ))}
        </div>
      </Container>
    </>
  );
}
export default App;
