import React from 'react';
import { Main } from '../sections';
import { Button } from '../components';

export const Lists = () => {
  return (
    <Main>
      <div className='flex flex-col justify-start items-start w-full h-full'>
        <div className='w-full mb-3'>
          <h1 className='text-3xl border-b pb-2'>Your Checkmark Lists</h1>
        </div>
        <div>
          <div className='w-96 border rounded overflow-hidden shadow-lg'>
            <div>
              <div className='mb-2 border-b px-4 py-3'>
                <h4 className='text-gray-900 font-bold text-xl'>
                  Yard Project
                </h4>
              </div>
              <div className='mb-2 border-b px-4 py-3'>
                <div className='mb-2'>
                  <input
                    id='myCheck0'
                    type='checkbox'
                    class='checked:bg-gray-900 checked:border-transparent'
                  />
                  <label htmlFor='myCheck0' className='ml-2 text-black'>
                    Plant new flowers by deck
                  </label>
                </div>
                <div className='mb-2'>
                  <input
                    id='myCheck'
                    type='checkbox'
                    checked
                    class='checked:bg-gray-900 checked:border-transparent'
                  />
                  <label
                    htmlFor='myCheck'
                    className='ml-2 line-through text-gray-500'
                  >
                    Pick up yard tools
                  </label>
                </div>
                <div className='mb-2'>
                  <input
                    id='myCheck2'
                    type='checkbox'
                    class='checked:bg-gray-900 checked:border-transparent'
                  />
                  <label htmlFor='myCheck2' className='ml-2 text-black'>
                    Place mulch around trees
                  </label>
                </div>
              </div>
              <div className='px-4 pb-3 w-full flex flex-col'>
                <p className='text-gray-500 text-base'>
                  keywords:{' '}
                  <span className='text-gray-600'>cleaning, lawn</span>
                </p>
                <div className='self-end'>
                  <Button size='small'>Edit List</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};
