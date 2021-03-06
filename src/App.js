import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer, Main } from './sections';
import { Home, Login, Signup, Lists, Profile, Keywords, About } from './pages';

function App() {
  return (
    <Router>
      <div className='w-screen h-screen flex flex-col'>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/lists'>
              <Lists />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/keywords'>
              <Keywords />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
