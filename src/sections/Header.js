import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/checkmark-outline.svg';

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className='w-full bg-green-800 flex-initial flex flex-col md:flex-row p-3'>
      <div className='flex flex-row flex-1 md:flex-1 justify-between items-center w-full h-auto my-3 ml-3'>
        <Link
          to='/'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          <Logo
            className='h-12 w-12'
            style={{
              fill: '#9ae6b4',
              filter: 'drop-shadow( 2px 2px 2px rgba(0, 0, 0, .7))',
            }}
          />
        </Link>
        <div
          className='px-4 cursor-pointer md:hidden'
          id='burger'
          onClick={() => setToggle(!toggle)}
        >
          <svg viewBox='0 0 20 20' fill='#FFF' className='menu w-8 h-8'>
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      </div>
      <div
        className={`flex flex-col md:flex-row flex-initial justify-center md:justify-end items-center self-center ${
          toggle ? 'block' : 'hidden'
        } md:block`}
      >
        <Link
          to='/'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Home
        </Link>
        <a
          href='/lists'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          To Do Lists
        </a>
        <a
          href='/profile'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Profile
        </a>
        <a
          href='/keywords'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Keywords
        </a>
        <a
          href='/about'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          About
        </a>
        <Link
          to='/login'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Login
        </Link>
        <Link
          to='/signup'
          className='mx-4 my-1 font-bold text-lg hover:text-green-300 text-white'
        >
          Signup
        </Link>
      </div>
    </header>
  );
};
