import React from 'react';
import profileImg from './img/bob-cobb.png';

function App() {
  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img className='w-full' src={profileImg} alt='Display' />
      <div className='px-6 py-4'>
        <div className='font-bold text-purple-500 text-xl mb-2'>Bob Cobb</div>
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
      </div>
    </div>
  );
}
export default App;
