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

      <main className='px-16 py-6'>
        <div className='flex justify-end'>
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
            <div>
              <img src='img/fish.png' alt='fish' />
              <div>
                <span>Grilled Salmon</span>
                <span>Recipe by Mario</span>
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
