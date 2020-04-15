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
        <SingleArticle
          article={this.state.article}
          commentCount={this.state.comments.length}
        />
        <NewComment
          handlePost={this.handlePost}
          handleChange={this.handleChange}
          newComment={this.state.newComment}
        />
        <ArticleComments
          comments={this.state.comments}
          user={this.props.user}
          handleDelete={this.handleDelete}
        />
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

    if (value.length > 0) {
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
    }
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ newComment: value });
  };

  handleDelete = (comment_id) => {
    this.setState((currentState) => {
      const updatedComments = currentState.comments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
      return { comments: updatedComments };
    });

    api.deleteComment(comment_id);
  };
}

export default ArticlePage;
