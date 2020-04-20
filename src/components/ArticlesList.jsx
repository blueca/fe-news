import React, { Component } from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import * as api from '../utils/api';
import ArticleListCard from './ArticleListCard';
import ErrorPage from './ErrorPage';

const Ol = styled.ol`
  padding-right: 2rem;

  @media (max-width: 768px) {
    padding: 0rem;
    list-style-type: none;
  }
`;

class ArticlesList extends Component {
  state = { articles: [], isLoading: true, error: null };

  render() {
    const { articles, isLoading, error } = this.state;
    const { user } = this.props;

    if (error) return <ErrorPage status={error.status} msg={error.msg} />;

    if (isLoading) return <Loading />;

    return (
      <article>
        <Ol>
          {articles.map((article) => {
            return (
              <li key={article.article_id}>
                <ArticleListCard article={article} user={user} />
              </li>
            );
          })}
        </Ol>
      </article>
    );
  }

  componentDidMount = () => {
    const { topic, sorting } = this.props;

    api
      .getArticles(topic, sorting)
      .then((articles) => {
        this.setState({ articles, isLoading: false, error: null });
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

  componentDidUpdate = (prevProps) => {
    const { topic, sorting } = this.props;

    if (
      prevProps.topic !== topic ||
      prevProps.sorting.sort_by !== sorting.sort_by ||
      prevProps.sorting.order !== sorting.order
    ) {
      this.setState({ isLoading: true });
      api
        .getArticles(topic, sorting)
        .then((articles) => {
          this.setState({ articles, isLoading: false, error: null });
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
    }
  };
}

export default ArticlesList;
