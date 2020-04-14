import React, { Component } from 'react';
import Loading from './Loading';
import * as api from '../utils/api';

class ArticlesList extends Component {
  state = { articles: [], isLoading: true };

  render() {
    const { articles, isLoading } = this.state;
    if (isLoading) return <Loading />;
    return (
      <article className="ArticlesList">
        <ul>
          {articles.map(({ title, article_id }) => {
            return <li key={article_id}>{title}</li>;
          })}
        </ul>
      </article>
    );
  }

  componentDidMount = () => {
    api.getArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticlesList;
