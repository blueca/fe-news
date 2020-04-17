import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { col } from '../styles/colours';
import Loading from './Loading';

const H = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 7rem;
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
  height: 1.2rem;
  margin: 0 1rem;
  padding: 0.5rem;
  background-color: ${col.layer1};
  border-radius: 0 0 0.5rem 0.5rem;
  box-shadow: 0 0 0.2rem black;
  width: 10rem;
  text-align: center;
  cursor: pointer;
`;

const P2 = styled(P)`
  &:hover span {
    display: none;
  }
  &:hover:before {
    content: 'Sign Out';
  }
`;

const H1 = styled.h1`
  margin: 0;
`;

const Section = styled.section`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 2rem;
`;

const Img = styled.img`
  height: 5rem;
  width: 5rem;
  background-color: ${col.layer1};
  border-radius: 0.5rem;
  box-shadow: 0 0 0.2rem black;
`;

const Header = ({ user, avatar, handleLogin, handleLogout, isLoading }) => {
  return (
    <H>
      <HeaderLink to="/">
        <H1>NC-NEWS</H1>
      </HeaderLink>
      <Section>
        {user === '' ? (
          <P onClick={handleLogin}>Sign In</P>
        ) : (
          <P2 onClick={handleLogout}>
            <span>User: {user}</span>
          </P2>
        )}
        {isLoading && <Loading />}
        {user !== '' && <Img src={avatar} alt="user avatar" />}
      </Section>
    </H>
  );
};

export default Header;
