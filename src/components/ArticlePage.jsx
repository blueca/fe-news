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

  @media (max-width: 768px) {
    padding: 0.5rem 0.2rem;
    margin: 0.5rem 0.2rem;
  }
`;

class ArticlePage extends Component {
  state = {
    article: {},
    comments: [],
    isLoading: true,
    error: null,
  };

  render() {
    const { article, comments, isLoading, error } = this.state;
    const { user, article_id } = this.props;
    document.title = `NC-News | ${article.title || ''}`;

    if (error) return <ErrorPage status={error.status} msg={error.msg} />;
    if (isLoading)
      return (
        <StyledDiv>
          <Loading />
        </StyledDiv>
      );
    return (
      <StyledDiv>
        <SingleArticle article={article} user={user} />
        {user !== '' && (
          <NewComment
            user={user}
            article_id={article_id}
            handlePost={this.handlePost}
          />
        )}
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
        const { data, status } = error.response;
        this.setState({
          error: {
            msg: data.error,
            status: status,
          },
        });
      });
  };

  handlePost = (comment) => {
    this.setState((currentState) => {
      return {
        comments: [comment, ...currentState.comments],
      };
    });
  };

  handleDelete = (comment_id) => {
    this.setState((currentState) => {
      const updatedComments = currentState.comments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
      return { comments: updatedComments };
    });

    api.deleteComment(comment_id).catch((error) => {
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

export default ArticlePage;
