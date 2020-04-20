import React from 'react';
import styled from 'styled-components';
import { col } from '../styles/colours';
import { Link } from '@reach/router';

const StyledDiv = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${col.layer1};
  border-radius: 0.3rem;
  border-left: 0.4rem solid red;
  box-shadow: 0 0 0.2rem black;
`;

const ErrorCard = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${col.layer1};
  border-radius: 0.3rem;
  color: rgb(240, 240, 240);
  box-shadow: 0 0 0.2rem black;

  @media (max-width: 768px) {
    padding: 0.5rem 0.2rem;
    margin: 0.5rem 0.2rem;
  }
`;

const StyledLink = styled(Link)`
  color: rgb(240, 240, 240);
`;

const ErrorPage = ({ status, msg }) => {
  return (
    <ErrorCard>
      <StyledDiv>
        <h2>Error!</h2>
        <p>{status || 500}</p>
        <p>{msg || 'Server Error'}</p>
        <h3>Get me out of here: </h3>
        <p>
          <StyledLink to="/topics/random">Random topic</StyledLink>
        </p>
        <p>
          <StyledLink to="/topics/all/random">Random article</StyledLink>
        </p>
      </StyledDiv>
    </ErrorCard>
  );
};

export default ErrorPage;
