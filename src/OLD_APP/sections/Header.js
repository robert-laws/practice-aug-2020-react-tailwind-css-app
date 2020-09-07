import React from 'react';

import NavBar from '../components/NavBar';

const Header = () => {
  const linkList = [
    {
      text: 'Home',
      url: 'http://localhost:3000',
    },
    {
      text: 'News',
      url: 'http://localhost:3000/news',
    },
    {
      text: 'About Us',
      url: 'http://localhost:3000/about',
    },
    {
      text: 'Helpful Info',
      url: 'http://localhost:3000/info',
    },
    {
      text: 'Contact Our Team',
      url: 'http://localhost:3000/contact',
    },
  ];

  return (
    <header>
      <NavBar links={linkList} />
    </header>
  );
};

export default Header;
