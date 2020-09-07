import React from 'react';
import { Header, Footer } from './sections';

function App() {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <Header />
      <main className='w-full bg-red-200 flex-1'>App</main>
      <Footer />
    </div>
  );
}
export default App;
