import React, { Component } from 'react';
import { navigate } from '@reach/router';
import styled from 'styled-components';
import * as api from '../utils/api';
import { col } from '../styles/colours';

const Select = styled.select`
  height: 1.5rem;
  width: 10rem;
  border-radius: 0.3rem;
  background-color: ${col.layer2};
  color: white;
`;

class Topics extends Component {
  state = { topics: [], selectedTopic: this.props.topic };

  render() {
    const { selectedTopic, topics } = this.state;

    return (
      <label>
        View Topic{' '}
        <Select onChange={this.handleChange} value={selectedTopic}>
          <option value="all">All</option>
          {topics.map(({ slug }) => {
            return (
              <option value={slug.toLowerCase()} key={slug}>
                {slug}
              </option>
            );
          })}
        </Select>
      </label>
    );
  }

  componentDidMount = () => {
    api
      .getTopics()
      .then((topics) => {
        this.setState({ topics });
      })
      .catch((error) => {
        const { data, status } = error.response;
        this.setState({
          error: {
            msg: data.error,
            status: status,
          },
        });
      });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ selectedTopic: value });

    navigate(`/topics/${value}`);
  };
}

export default Topics;
