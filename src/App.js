import React from 'react';
import profileImg from './img/bob-cobb.png';
import Button from './components/Button';
import NavBar from './components/NavBar';

function App() {
  const linkList = [
    {
      text: 'Home',
      url: 'http://localhost:3000',
    },
    {
      text: 'News',
      url: 'http://localhost:3000/news',
    },
    {
      text: 'About Us',
      url: 'http://localhost:3000/about',
    },
    {
      text: 'Helpful Info',
      url: 'http://localhost:3000/info',
    },
    {
      text: 'Contact Our Team',
      url: 'http://localhost:3000/contact',
    },
  ];

  return (
    <main>
      <NavBar links={linkList} />
      <div className='bg-blue-700 container p-4'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
          <img className='w-full' src={profileImg} alt='Display' />
          <div className='px-6 py-4'>
            <div className='font-bold text-purple-500 text-xl mb-2'>
              Bob Cobb
            </div>
            <p className='text-gray-700 text-base'>
              Avid nature lover and hiker. Enjoying code and mountain pathways.{' '}
              <span></span>😜
            </p>
          </div>
          <div className='px-6 py-4'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
              #Software Engineer
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
              #Writer
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mt-2'>
              #Public Speaker
            </span>
            <button className='bg-dodgerBlue font-bold text-white px-4 py-2 rounded hover:bg-blue-600'>
              Click here
            </button>
            <button className='btn btn-blue'>Click here</button>
            <Button click={() => console.log('new click...')}>
              Another Button
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
export default App;
