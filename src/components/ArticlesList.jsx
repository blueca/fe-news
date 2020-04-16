import React, { Component } from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import * as api from '../utils/api';
import ArticleListCard from './ArticleListCard';
import ErrorPage from './ErrorPage';

const Ol = styled.ol`
  list-style-type: upper-roman;
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
              <ArticleListCard article={article} key={article.article_id} />
            );
          })}
        </Ol>
      </article>
    );
  }

  componentDidMount = () => {
    api
      .getArticles(this.props.topic, this.props.sorting)
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
    if (
      prevProps.topic !== this.props.topic ||
      prevProps.sorting.sort_by !== this.props.sorting.sort_by ||
      prevProps.sorting.order !== this.props.sorting.order
    ) {
      this.setState({ isLoading: true });
      api
        .getArticles(this.props.topic, this.props.sorting)
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
    }
  };
}

export default ArticlesList;
