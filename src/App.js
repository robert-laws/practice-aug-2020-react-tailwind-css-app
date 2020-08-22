import React from 'react';
// import Home from './sections/Home';

function App() {
  return (
    <div className='font-body'>
      <div>
        <nav>
          <div>
            <h1 className='font-bold uppercase p-4 border-b border-gray-100'>
              <a href='/'>Food Ninja</a>
            </h1>
          </div>
          <ul>
            <li className='text-gray-700 font-bold'>
              <a href='#home'>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href='#about'>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href='#contact'>
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* end nav */}

      <main className='px-16 py-6 bg-gray-100'>
        <div className='flex justify-center md:justify-end'>
          <a href='#login' className='text-primary'>
            Login
          </a>
          <a href='#sign-up' className='text-primary ml-2'>
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
          <div className='mt-8'>
            {/* cards go here */}
            <div className='bg-white rounded-lg overflow-hidden shadow-md relative'>
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
              <div className='bg-secondary-100 text-secondary-200 text-xs font-bold rounded-full p-2 absolute top-0 ml-2 mt-2'>
                <span>25 mins</span>
              </div>
            </div>
          </div>

          <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>
            Most Popular
          </h4>

          <div className='mt-8'>{/* cards go here */}</div>

          <div className='flex justify-center'>
            <div className='bg-secondary-100 text-secondary-200'>Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
