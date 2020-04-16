import React from 'react';

const Sort = ({ handleChange }) => {
  return (
    <form onChange={handleChange}>
      <label>
        Sort By:
        <select
          name="sort_by"
          defaultValue={
            JSON.parse(sessionStorage.getItem('sorting'))?.sort_by || 'votes'
          }
        >
          <option value="votes">Votes</option>
          <option value="created_at">Date</option>
          <option value="comment_count">Comments</option>
        </select>
        <select
          name="order"
          defaultValue={
            JSON.parse(sessionStorage.getItem('sorting'))?.order || 'desc'
          }
        >
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </label>
    </form>
  );
};

export default Sort;
