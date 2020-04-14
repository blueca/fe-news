import React, { Component } from 'react';
import * as api from '../utils/api';

import Topics from './Topics';

class Nav extends Component {
  state = { topics: [] };

  render() {
    return (
      <nav>
        <Topics topics={this.state.topics} />
        <p>sort</p>
      </nav>
    );
  }

  componentDidMount = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  };
}

export default Nav;
