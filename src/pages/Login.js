import React from 'react';

export const Login = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className='w-full xl:w-4/12 lg:w-1/2 md:w-3/4 sm:w-10/12 rounded shadow-lg px-3 pb-3'>
        <form className='bg-white px-4 pt-6'>
          <div className='mb-4'>
            <h2 className='text-xl font-bold text-gray-700'>
              Login to the Checkmark List App
            </h2>
          </div>
          <div className='mb-4'>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight placeholder-gray-400 focus:outline-none focus:shadow-outline'
              id='email'
              type='text'
              placeholder='Email'
            />
          </div>
          <div className='mb-4'>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight placeholder-gray-400 focus:outline-none focus:shadow-outline'
              id='password'
              type='text'
              placeholder='Password'
            />
          </div>
          <div className='mb-4'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
