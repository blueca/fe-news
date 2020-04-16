import React, { Component } from 'react';
import styled from 'styled-components';
import SingleArticle from './SingleArticle';
import ArticleComments from './ArticleComments';
import * as api from '../utils/api';
import { col } from '../styles/colours';
import NewComment from './NewComment';
import Loading from './Loading';
import ErrorPage from './ErrorPage';

const StyledDiv = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
  background-color: ${col.layer1};
  border-radius: 0.3rem;
  color: rgb(240, 240, 240);
  box-shadow: 0 0 0.2rem black;
`;

class ArticlePage extends Component {
  state = {
    article: {},
    comments: [],
    newComment: '',
    isLoading: true,
    error: null,
  };

  render() {
    const { article, comments, newComment, isLoading, error } = this.state;
    const { user } = this.props;

    if (error) return <ErrorPage status={error.status} msg={error.msg} />;
    if (isLoading) return <Loading />;
    return (
      <StyledDiv>
        <SingleArticle article={article} />
        <NewComment
          handlePost={this.handlePost}
          handleChange={this.handleChange}
          newComment={newComment}
        />
        <ArticleComments
          comments={comments}
          user={user}
          handleDelete={this.handleDelete}
        />
      </StyledDiv>
    );
  }

  componentDidMount = () => {
    api
      .getSingleArticle(this.props.article_id)
      .then(({ article, comments }) => {
        this.setState({ article, comments, isLoading: false });
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
