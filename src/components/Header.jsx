import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const H = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 5rem;
`;

const HeaderLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding-left: 2rem;

  &:visited {
    color: black;
  }

  &:hover {
    color: slategray;
  }
`;

const P = styled.p`
  align-self: flex-start;
  margin: 0 1rem;
  padding: 0.5rem;
  background-color: green;
  border-radius: 0 0 0.5rem 0.5rem;
  margin-right: 2rem;
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
