import React, { Component } from 'react';
import styled from 'styled-components';

// import * as api from '../utils/api';

import Topics from './Topics';
import Sort from './Sort';

const Controls = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

class Nav extends Component {
  // state = { topics: [] };

  render() {
    const { topic, handleChange, sorting } = this.props;

    return (
      <Controls>
        <Topics topic={topic} />
        <Sort handleChange={handleChange} sorting={sorting} />
      </Controls>
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
