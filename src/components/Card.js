import React from 'react';
import Button from './Button';

const Card = ({ name, img }) => {
  return (
    <div className='w-64 rounded overflow-hidden shadow-lg bg-white m-1'>
      <img className='w-max-content' src={img} alt='Display' />
      <div className='px-6 py-4'>
        <div className='font-bold text-red-500 text-4xl'>{name}</div>
      </div>
      <hr />
      <div className='mt-4 px-4 py-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #Fruit
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #Snack
        </span>
      </div>
      <div className='px-2'>
        <Button>Select</Button>
      </div>
    </div>
  );
};

export default Card;
