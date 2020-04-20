import React, { Component } from 'react';
import ErrorPage from './ErrorPage';
import Loading from './Loading';
import * as api from '../utils/api';
import { navigate } from '@reach/router';

class RandomTopic extends Component {
  state = { topics: [], error: null };

  render() {
    const { topics, error } = this.state;

    if (error) return <ErrorPage status={error.status} msg={error.msg} />;

    if (topics.length !== 0) {
      const randTopic = Math.floor(Math.random() * topics.length);

      navigate(`/topics/${topics[randTopic].slug}`);
    }

    return <Loading />;
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
}

export default RandomTopic;
