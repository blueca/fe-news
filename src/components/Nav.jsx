import React from 'react';
import styled from 'styled-components';
import Topics from './Topics';
import Sort from './Sort';

const Controls = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Nav = ({ topic, handleChange, sorting }) => {
  return (
    <Controls>
      <Topics topic={topic} />
      <Sort handleChange={handleChange} sorting={sorting} />
    </Controls>
  );
};

export default Nav;
