import React, { Component } from 'react';
import styled from 'styled-components';
import SingleArticle from './SingleArticle';
import ArticleComments from './ArticleComments';
import * as api from '../utils/api';
import NewComment from './NewComment';

const StyledDiv = styled.div`
  padding: 0 2rem;
`;

class ArticlePage extends Component {
  state = { article: {}, comments: [], newComment: '' };

  render() {
    return (
      <StyledDiv>
        <SingleArticle
          article={this.state.article}
          // commentCount={this.state.comments.length}
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
      </StyledDiv>
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
      api.postComment(article_id, comment).then((response) => {
        this.setState((currentState) => {
          return {
            comments: [response, ...currentState.comments],
            newComment: '',
          };
        });
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
