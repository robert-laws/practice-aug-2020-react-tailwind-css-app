import React, { useState } from 'react';
// import Home from './sections/Home';

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='font-body grid md:grid-cols-3'>
      <div className='md:col-span-1 md:flex md:justify-end'>
        <nav className='text-right'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
              <a href='/' className='hover:text-gray-700'>
                Food Ninja
              </a>
            </h1>
            <div
              className='px-4 cursor-pointer md:hidden'
              id='burger'
              onClick={() => setToggle(!toggle)}
            >
              <svg
                viewBox='0 0 20 20'
                fill='currentColor'
                className='menu w-6 h-6'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
          <ul
            className={`text-sm mt-6 ${toggle ? 'block' : 'hidden'} md:block`}
            id='menu'
          >
            <li className='text-gray-700 font-bold py-1'>
              <a
                href='#home'
                className='px-4 flex justify-end border-r-4 border-primary'
              >
                <span>Home</span>
                <svg
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='home w-5 h-5 ml-2'
                >
                  <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                </svg>
              </a>
            </li>
            <li className='py-1'>
              <a
                href='#about'
                className='px-4 flex justify-end border-r-4 border-white'
              >
                <span>About</span>
                <svg
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='question-mark-circle w-5 h-5 ml-2'
                >
                  <path
                    fillRule='evenodd'
                    d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
            <li className='py-1'>
              <a
                href='#contact'
                className='px-4 flex justify-end border-r-4 border-white'
              >
                <span>Contact Us</span>
                <svg
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='mail w-5 h-5 ml-2'
                >
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* end nav */}

      <main className='px-16 py-6 bg-gray-100 md:col-span-2'>
        <div className='flex justify-center md:justify-end'>
          <a
            href='#login'
            className='text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500'
          >
            Login
          </a>
          <a
            href='#sign-up'
            className='text-primary btn border-primary md:border-2 ml-2 hover:bg-primary hover:text-white transition ease-out duration-500'
          >
            Sign Up
          </a>
        </div>

        <header>
          <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
          <h3 className='text-2xl font-semibold'>For Ninjas</h3>
        </header>

        <div>
          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>
            Latest Recipes
          </h4>
          <div className='mt-8 grid lg:grid-cols-3 lg:gap-8'>
            {/* cards go here */}
            <div className='card hover:shadow-lg mb-4 lg:mb-0'>
              <img
                src='img/fish.png'
                alt='fish'
                className='w-full h-40 sm:h-56 object-cover'
              />
              <div className='m-4'>
                <span className='font-bold'>Grilled Salmon</span>
                <span className='block text-gray-500 text-sm'>
                  Recipe by Mario
                </span>
              </div>
              <div className='badge flex items-center'>
                <svg
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='clock w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='ml-1'>40 mins</span>
              </div>
            </div>
            <div className='card hover:shadow-lg mb-4 lg:mb-0'>
              <img
                src='img/sandwich.png'
                alt='sandwich'
                className='w-full h-40 sm:h-56 object-cover'
              />
              <div className='m-4'>
                <span className='font-bold'>Club Sandwich</span>
                <span className='block text-gray-500 text-sm'>
                  Recipe by Kalvin
                </span>
              </div>
              <div className='badge flex items-center'>
                <svg
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='clock w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='ml-1'>15 mins</span>
              </div>
            </div>
            <div className='card hover:shadow-lg'>
              <img
                src='img/soup.png'
                alt='soup'
                className='w-full h-40 sm:h-56 object-cover'
              />
              <div className='m-4'>
                <span className='font-bold'>Chicken Soup</span>
                <span className='block text-gray-500 text-sm'>
                  Recipe by James
                </span>
              </div>
              <div className='badge flex items-center'>
                <svg
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='clock w-5 h-5'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                <span className='ml-1'>25 mins</span>
              </div>
            </div>
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>
            Most Popular
          </h4>

          <div className='mt-8'>{/* cards go here */}</div>

          <div className='flex justify-center'>
            <div className='btn bg-secondary-100 text-secondary-200 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300'>
              Load more
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
