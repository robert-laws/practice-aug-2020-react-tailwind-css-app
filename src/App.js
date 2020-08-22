import React from 'react';
// import Home from './sections/Home';

function App() {
  return (
    <div>
      <div>
        <nav>
          <div>
            <h1 className='font-bold uppercase'>
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

      <main>
        <div>
          <a href='#login'>Login</a>
          <a href='#sign-up'>Sign Up</a>
        </div>

        <header>
          <h2 className='text-gray-700 text-6xl font-semibold'>Recipes</h2>
          <h3 className='text-2xl font-semibold'>For Ninjas</h3>
        </header>

        <div>
          <h4 className='font-bold'>Latest Recipes</h4>
          <div>
            {/* cards go here */}
            <div>
              <img src='img/fish.png' alt='fish' />
              <div>
                <span>Grilled Salmon</span>
                <span>Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 className='font-bold'>Most Popular</h4>

          <div>{/* cards go here */}</div>

          <div>
            <div>Load more</div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
