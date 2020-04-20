import React, { Component } from 'react';
import * as api from '../utils/api';
import { navigate } from '@reach/router';
import Loading from './Loading';
import ErrorPage from './ErrorPage';

class RandomArticle extends Component {
  state = { articles: null, error: null };

  render() {
    const { articles, error } = this.state;

    if (error) return <ErrorPage status={error.status} msg={error.msg} />;

    if (articles !== null) {
      const randArticle = Math.floor(Math.random() * articles) + 1;

      navigate(`/topics/all/${randArticle}`);
    }

    return <Loading />;
  }

  componentDidMount = () => {
    api
      .getArticles('all', { sort_by: 'votes', order: 'desc' })
      .then((articles) => {
        this.setState({ articles: articles.length });
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

export default RandomArticle;
