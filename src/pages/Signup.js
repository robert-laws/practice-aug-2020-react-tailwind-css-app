import React from 'react';

export const Signup = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className='w-full xl:w-4/12 lg:w-1/2 md:w-3/4 sm:w-10/12 rounded shadow-lg px-3 pb-3'>
        <form className='bg-white px-4 pt-6'>
          <div className='mb-4'>
            <h2 className='text-xl font-bold text-gray-700'>
              Signup for the Checkmark List App
            </h2>
          </div>
          <div className='mb-4'>
            <input
              type='text'
              id='firstName'
              placeholder='First Name'
              className='shadow appearance-none border rounded w-full py-2 px-3'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              id='lastName'
              placeholder='Last Name'
              className='shadow appearance-none border rounded w-full py-2 px-3'
            />
          </div>
          <div className='mb-4'>
            <input
              type='text'
              id='email'
              placeholder='Email'
              className='shadow appearance-none border rounded w-full py-2 px-3'
            />
          </div>
          <div className='mb-4'>
            <input
              type='password'
              id='password'
              placeholder='Password'
              className='shadow appearance-none border rounded w-full py-2 px-3'
            />
          </div>
          <div className='mb-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
