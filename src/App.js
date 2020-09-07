import React from 'react';
import { Header, Footer, Main } from './sections';
import { Login } from './pages';

function App() {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <Header />
      <Main>
        <Login />
      </Main>
      <Footer />
    </div>
  );
}
export default App;
