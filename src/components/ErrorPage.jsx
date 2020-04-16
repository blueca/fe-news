import React from 'react';
import styled from 'styled-components';
import { col } from '../styles/colours';

const StyledDiv = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${col.layer1};
  border-radius: 0.3rem;
`;

const ErrorPage = ({ status, msg }) => {
  return (
    <StyledDiv>
      <p>Error!</p>
      <p>{status || 500}</p>
      <p>{msg || 'Server Error'}</p>
    </StyledDiv>
  );
};

export default ErrorPage;
