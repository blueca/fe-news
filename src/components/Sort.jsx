import React from 'react';
import styled from 'styled-components';
import { col } from '../styles/colours';

const Select = styled.select`
  height: 1.5rem;
  border-radius: 0.3rem;
  background-color: ${col.layer2};
  color: white;
`;

const Sort = ({ handleChange }) => {
  return (
    <form onChange={handleChange}>
      <label>
        Sort By{' '}
        <Select
          name="sort_by"
          defaultValue={
            JSON.parse(sessionStorage.getItem('sorting'))?.sort_by || 'votes'
          }
        >
          <option value="votes">Votes</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
        </Select>
        <Select
          name="order"
          defaultValue={
            JSON.parse(sessionStorage.getItem('sorting'))?.order || 'desc'
          }
        >
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </Select>
      </label>
    </form>
  );
};

export default Sort;
