import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
      <form>
        <label>
          Sort By:
          <select>
            <option value="votes">Votes</option>
            <option value="date">Date</option>
            <option value="comments">Comments</option>
          </select>
          <select>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Sort;
