import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: royalblue;
  border-radius: 0.3rem;
`;

const Loading = () => {
  return (
    <StyledDiv>
      <p>Loading...</p>
    </StyledDiv>
  );
};

export default Loading;
