import React, { Component } from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
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

const StyledInfiniteScroll = styled(InfiniteScroll)`
  padding-bottom: 1rem;
`;

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    error: null,
    countOfArticles: 0,
    nextPage: 2,
  };

  render() {
    const { articles, isLoading, error, countOfArticles } = this.state;
    const { user } = this.props;

    if (error) return <ErrorPage status={error.status} msg={error.msg} />;

    if (isLoading) return <Loading />;

    return (
      <article>
        <StyledInfiniteScroll
          pageStart={0}
          loadMore={this.fetchMoreArticles}
          hasMore={articles.length !== countOfArticles}
          loader={<Loading key="loader" />}
          threshold={100}
        >
          <Ol key="listParent">
            {articles.map((article) => {
              return (
                <li key={article.article_id}>
                  <ArticleListCard article={article} user={user} />
                </li>
              );
            })}
          </Ol>
        </StyledInfiniteScroll>
      </article>
    );
  }

  componentDidMount = () => {
    const { topic, sorting } = this.props;

    api
      .getArticles(topic, sorting)
      .then(({ articles, total_count }) => {
        this.setState({
          articles,
          isLoading: false,
          error: null,
          countOfArticles: total_count,
        });
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
        .then(({ articles, total_count }) => {
          this.setState({
            articles,
            isLoading: false,
            error: null,
            countOfArticles: total_count,
            nextPage: 2,
          });
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

  fetchMoreArticles = () => {
    const { topic, sorting } = this.props;
    const { nextPage } = this.state;

    api
      .getArticles(topic, sorting, nextPage)
      .then((moreArticles) => {
        this.setState((currentState) => {
          const { articles, nextPage } = currentState;

          return {
            articles: articles.concat(moreArticles.articles),
            nextPage: nextPage + 1,
          };
        });
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

export default ArticlesList;
