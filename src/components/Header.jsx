import React from 'react';
import { Link } from '@reach/router';

const Header = ({ user }) => {
  return (
    <header>
      <Link to="/">
        <h1>NC-NEWS</h1>
      </Link>
      <p>User: {user}</p>
    </header>
  );
};

export default Header;
