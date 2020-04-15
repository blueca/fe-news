import React, { Component } from 'react';
import Loading from './Loading';
import * as api from '../utils/api';
import ArticleListCard from './ArticleListCard';

class ArticlesList extends Component {
  state = { articles: [], isLoading: true };

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) return <Loading />;

    return (
      <article className="ArticlesList">
        <ul>
          {articles.map((article) => {
            return (
              <ArticleListCard article={article} key={article.article_id} />
            );
          })}
        </ul>
      </article>
    );
  }

  componentDidMount = () => {
    api.getArticles(this.props.topic, this.props.sorting).then((articles) => {
      this.setState({ articles, isLoading: false });
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
          this.setState({ articles, isLoading: false });
        })
        .catch(console.log);
    }
  };
}

export default ArticlesList;
