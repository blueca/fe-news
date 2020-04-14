import React, { Component } from 'react';
import { Link } from '@reach/router';
// import * as api from '../utils/api';

class Topics extends Component {
  state = { topics: [] };

  render() {
    // const { selectedTopic } = this.state;
    const { topics } = this.props;
    return (
      <ul>
        <li>
          <Link to="/topics/all">all</Link>
        </li>
        {topics.map(({ slug }) => {
          return (
            <li value={slug.toLowerCase()} key={slug}>
              <Link to={`/topics/${slug}`}>{slug}</Link>
            </li>
          );
        })}
      </ul>

      // <label>
      //   View Topic:
      //   <select onChange={this.handleChange} value={selectedTopic}>
      //     <option value="all">All</option>
      //     {topics.map(({ slug }) => {
      //       return (
      //         <option value={slug.toLowerCase()} key={slug}>
      //           {slug}
      //         </option>
      //       );
      //     })}
      //   </select>
      // </label>
    );
  }

  // componentDidMount = () => {
  //   console.log('mounted');
  //   api.getTopics().then((topics) => {
  //     this.setState({ topics });
  //   });
  // };

  // handleChange = (event) => {
  //   const { value } = event.target;
  //   if (value === 'all') {
  //     navigate('/');
  //   } else {
  //     navigate(`/topics/${value}`);
  //   }
  //   this.setState({ selectedTopic: value });
  // };
}

export default Topics;
