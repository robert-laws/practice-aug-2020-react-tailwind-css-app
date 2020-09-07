import React from 'react';

const Button = ({ click, children }) => {
  return (
    <button
      onClick={click}
      className='bg-dodgerBlue font-bold text-white px-4 py-2 rounded hover:bg-blue-600 m-2'
    >
      {children}
    </button>
  );
};

export default Button;
