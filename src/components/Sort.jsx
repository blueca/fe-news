import React, { Component } from 'react';

class Sort extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <form onChange={handleChange}>
        <label>
          Sort By:
          <select name="sort_by">
            <option value="votes">Votes</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
          </select>
          <select name="order">
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Sort;
