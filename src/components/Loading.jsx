import React from 'react';
import styled from 'styled-components';
import { col } from '../styles/colours';

const StyledDiv = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${col.layer1};
  border-radius: 0.3rem;
  box-shadow: 0 0 0.2rem black;
`;

const Loading = () => {
  return (
    <div className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
