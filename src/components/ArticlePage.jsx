import React, { Component } from 'react';
import SingleArticle from './SingleArticle';
import ArticleComments from './ArticleComments';
import * as api from '../utils/api';
import NewComment from './NewComment';

class ArticlePage extends Component {
  state = { article: {}, comments: [], newComment: '' };

  render() {
    return (
      <div>
        <SingleArticle article={this.state.article} />
        <NewComment
          handlePost={this.handlePost}
          handleChange={this.handleChange}
          newComment={this.state.newComment}
        />
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

  handlePost = (event) => {
    event.preventDefault();
    const { value } = event.target.newComment;
    const { user, article_id } = this.props;
    const comment = { username: user, body: value };

    api.postComment(article_id, comment).catch(console.log);

    this.setState((currentState) => {
      const userViewComment = {};
      userViewComment.votes = 0;
      userViewComment.author = user;
      userViewComment.created_at = new Date().toISOString();
      userViewComment.body = value;
      userViewComment.comment_id = `optimisticComment${currentState.comments.length}`;
      const updateComments = [userViewComment, ...currentState.comments];
      return { comments: updateComments, newComment: '' };
    });
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ newComment: value });
  };
}

export default ArticlePage;
