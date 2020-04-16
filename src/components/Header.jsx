import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { col } from '../styles/colours';

const H = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 5rem;
`;

const HeaderLink = styled(Link)`
  color: rgb(190, 190, 190);
  text-decoration: none;
  padding-left: 2rem;

  &:visited {
    color: rgb(190, 190, 190);
  }

  &:hover {
    color: rgb(220, 220, 220);
  }
`;

const P = styled.p`
  align-self: flex-start;
  margin: 0 1rem;
  padding: 0.5rem;
  background-color: ${col.layer1};
  border-radius: 0 0 0.5rem 0.5rem;
  margin-right: 2rem;
  box-shadow: 0 0 0.2rem black;
`;

const H1 = styled.h1`
  margin: 0;
`;

const Header = ({ user }) => {
  return (
    <H>
      <HeaderLink to="/">
        <H1>NC-NEWS</H1>
      </HeaderLink>
      <P>User: {user}</P>
    </H>
  );
};

export default Header;
