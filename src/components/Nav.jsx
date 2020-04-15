import React, { Component } from 'react';
// import * as api from '../utils/api';

import Topics from './Topics';
import Sort from './Sort';

class Nav extends Component {
  // state = { topics: [] };

  render() {
    const { topic, handleChange } = this.props;
    return (
      <nav>
        <Topics topic={topic} />
        <Sort handleChange={handleChange} />
      </nav>
    );
  }

  // componentDidMount = () => {
  // console.log('nav mounted');
  // api.getTopics().then((topics) => {
  //   this.setState({ topics });
  // });
  // };
}

export default Nav;
