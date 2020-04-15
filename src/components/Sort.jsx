import React, { Component } from 'react';

class Sort extends Component {
  // state = { sorting: { sort_by: 'votes', order: 'desc' } };

  render() {
    const { handleChange, sorting } = this.props;
    // const { sort_by, order } = this.state.sorting;
    // console.log(sorting.sort_by, sorting.order);

    return (
      <form onChange={handleChange}>
        <label>
          Sort By:
          <select name="sort_by" defaultValue={`${sorting.sort_by}`}>
            <option value="votes">Votes</option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
          </select>
          <select name="order" defaultValue={sorting.order}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </label>
      </form>
    );
  }

  // componentDidMount = () => {
  //   const sorting = JSON.parse(sessionStorage.getItem('sorting'));
  //   console.log('storageMount: ', sorting);
  //   if (sorting) {
  //     this.setState({ sorting });
  //   }
  // };
  // componentDidUpdate = (prevProps) => {
  //   if (
  //     prevProps.sorting.sort_by !== this.props.sorting.sort_by ||
  //     prevProps.sorting.order !== this.props.sorting.order
  //   ) {
  //     // const sorting = JSON.parse(sessionStorage.getItem('sorting'));
  //     if (this.props.sorting) {
  //       this.setState({ sorting: this.props.sorting });
  //     }
  //   }
  // };
}

export default Sort;
