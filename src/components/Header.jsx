import React from 'react';
import { Link } from '@reach/router';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>NC-NEWS</h1>
      </Link>
    </header>
  );
};

export default Header;
