import React from 'react';
import hero from '../images/checkmark-hero.jpg';

export const Home = () => {
  return (
    <div className='flex flex-col md:flex-row h-full w-full justify-between'>
      <div className='bg-white flex-1 flex flex-col h-full w-full'>
        <div className='flex-1 flex w-full justify-between'>
          <div className='flex-1'></div>
          <div className='flex-1 hero-pattern'></div>
        </div>
        <div className='flex-1 px-24 mt-2 md:mt-0 mb-4 md:mb-0'>
          <h1 className='text-4xl font-bold text-green-800 mb-2 md:leading-none leading-tight md:text-left text-center'>
            Checkmark Lists{' '}
            <span className='block text-3xl text-green-500'>
              Keep Track of your Tasks
            </span>
          </h1>
          <p className='mb-6 px-3 md:text-left text-center'>
            Stylish To Do App to create multiple lists and tasks fast. Take
            control of your tasks now.
          </p>
          <div className='flex md:flex-row flex-col w-full justify-between'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full md:mr-2 md:mb-0 mb-2'>
              Signup
            </button>
            <button className='bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full md:ml-2'>
              Login
            </button>
          </div>
        </div>
        <div className='flex-1 flex w-full justify-between'>
          <div className='flex-1 hero-pattern'></div>
          <div className='flex-1'></div>
        </div>
      </div>
      <div className='flex-1 hero-image lg:block hidden'>
        <img
          className='h-full w-full object-cover hidden lg:block'
          src={hero}
          alt='checkmark list'
        />
      </div>
    </div>
  );
};
