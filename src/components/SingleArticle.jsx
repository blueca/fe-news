import React, { Component } from 'react';
import * as api from '../utils/api';

class SingleArticle extends Component {
  state = { article: {} };

  render() {
    const {
      title,
      author,
      created_at,
      body,
      comment_count,
      topic,
      votes,
    } = this.state.article;
    return (
      <div>
        <p>{votes} votes</p>

        <p>{title}</p>
        <p>{topic}</p>

        <p>submitted at {created_at}</p>
        <p>by {author}</p>
        <p>{body}</p>
        <p>{comment_count} comments</p>
      </div>
    );
  }

  componentDidMount = () => {
    api.getSingleArticle(this.props.article_id).then((article) => {
      this.setState({ article });
    });
  };
}

export default SingleArticle;
