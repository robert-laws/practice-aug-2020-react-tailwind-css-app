import React from 'react';
import { ReactComponent as Logo } from '../images/checkmark-outline.svg';

export const Header = () => {
  return (
    <header className='w-full bg-green-800 flex-initial flex flex-col sm:flex-row items-center p-3'>
      <div className='flex flex-col flex-1 sm:flex-initial justify-center items-center w-20 h-auto my-3'>
        <Logo
          className='h-10 w-10'
          style={{
            fill: '#9ae6b4',
            filter: 'drop-shadow( 2px 2px 2px rgba(0, 0, 0, .7))',
          }}
        />
      </div>
      <div className='flex flex-col sm:flex-row flex-1 justify-center sm:justify-end items-center'>
        <a
          href='/'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Home
        </a>
        <a
          href='/'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Your To Do Lists
        </a>
        <a
          href='/'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Our Mission
        </a>
        <a
          href='/'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          About Us
        </a>
      </div>
    </header>
  );
};
