import React from 'react';
import styled from 'styled-components';
import Topics from './Topics';
import Sort from './Sort';

const Controls = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem 0.5rem;
  }
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
