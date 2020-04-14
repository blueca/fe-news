import React, { Component } from 'react';
import Topics from './Topics';

class Nav extends Component {
  state = { topics: [] };

  render() {
    return (
      <nav>
        <Topics />
        <p>sort</p>
      </nav>
    );
  }
}

export default Nav;
