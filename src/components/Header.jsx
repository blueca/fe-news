import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const H = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding-left: 2rem;

  &:visited {
    color: black;
  }
`;

const P = styled.p`
  align-self: flex-start;
  margin: 0 1rem;
  padding: 0.5rem;
  background-color: red;
  border-radius: 0 0 0.5rem 0.5rem;
  margin-right: 2rem;
`;

const Header = ({ user }) => {
  return (
    <H>
      <HeaderLink to="/">
        <h1>NC-NEWS</h1>
      </HeaderLink>
      <P>User: {user}</P>
    </H>
  );
};

export default Header;
