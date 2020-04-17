import React from 'react';
import styled from 'styled-components';
import { col } from '../styles/colours';
import * as api from '../utils/api';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 5rem;
`;

const TextArea = styled.textarea`
  background-color: ${col.layer2};
  color: white;
`;

class NewComment extends React.Component {
  state = { newComment: '' };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          <TextArea
            name="newComment"
            cols="70"
            rows="6"
            onChange={this.handleChange}
            value={this.state.newComment}
            required
            placeholder="Add new comment..."
          ></TextArea>
        </label>
        <Button>Post</Button>
      </Form>
    );
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ newComment: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { value } = event.target.newComment;
    const { handlePost, user, article_id } = this.props;
    const comment = { username: user, body: value };

    api.postComment(article_id, comment).then((response) => {
      this.setState({ newComment: '' }, () => handlePost(response));
    });
  };
}

export default NewComment;
