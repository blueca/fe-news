import React, { Component } from 'react';
import { navigate } from '@reach/router';
import * as api from '../utils/api';

class Topics extends Component {
  state = { topics: [], selectedTopic: this.props.topic };

  render() {
    const { selectedTopic, topics } = this.state;
    // const { topics } = this.props;
    return (
      // <ul>
      //   <li>
      //     <Link to="/">all</Link>
      //   </li>
      //   {topics.map(({ slug }) => {
      //     return (
      //       <li value={slug.toLowerCase()} key={slug}>
      //         <Link to={`/topics/${slug}`}>{slug}</Link>
      //       </li>
      //     );
      //   })}
      // </ul>

      <label>
        View Topic:
        <select onChange={this.handleChange} value={selectedTopic}>
          <option value="all">All</option>
          {topics.map(({ slug }) => {
            return (
              <option value={slug.toLowerCase()} key={slug}>
                {slug}
              </option>
            );
          })}
        </select>
      </label>
    );
  }

  componentDidMount = () => {
    api.getTopics().then((topics) => {
      this.setState({ topics });
    });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedTopic: value });
    // if (value === 'all') {
    //   navigate('/');
    // } else {
    navigate(`/topics/${value}`);
    // }
  };
}

export default Topics;
