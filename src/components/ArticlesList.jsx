import React, { Component } from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import * as api from '../utils/api';
import ArticleListCard from './ArticleListCard';
import ErrorPage from './ErrorPage';

const Ol = styled.ol`
  padding-right: 2rem;
`;

class ArticlesList extends Component {
  state = { articles: [], isLoading: true, error: null };

  render() {
    const { articles, isLoading, error } = this.state;

    if (error) return <ErrorPage status={error.status} msg={error.msg} />;

    if (isLoading) return <Loading />;

    return (
      <article className="ArticlesList">
        <Ol>
          {articles.map((article) => {
            return (
              <li>
                <ArticleListCard article={article} key={article.article_id} />
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
        this.setState({
          error: {
            msg: error.response.data.error,
            status: error.response.status,
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
          const { response } = error;
          this.setState({
            error: {
              msg: response.data.error,
              status: response.status,
            },
          });
        });
    }
  };
}

export default ArticlesList;
