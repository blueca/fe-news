import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';

class Topics extends Component {
  state = { topics: [] };

  render() {
    const { topics } = this.state;

    return (
      <label>
        <select>
          <option value="-1" default>
            All
          </option>
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
}

export default Topics;
