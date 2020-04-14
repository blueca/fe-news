import React, { Component } from 'react';
import SingleArticle from './SingleArticle';
import ArticleComments from './ArticleComments';
import * as api from '../utils/api';

class ArticlePage extends Component {
  state = { article: {}, comments: [] };

  render() {
    return (
      <div>
        <SingleArticle article={this.state.article} />
        <ArticleComments comments={this.state.comments} />
      </div>
    );
  }

  componentDidMount = () => {
    api
      .getSingleArticle(this.props.article_id)
      .then(({ article, comments }) => {
        this.setState({ article, comments });
      });
  };
}

export default ArticlePage;
