import React from 'react';
import styled from 'styled-components';
import { col } from '../styles/colours';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 5rem;
`;

const TextArea = styled.textarea`
  background-color: ${col.layer2};
`;

const NewComment = ({ handlePost, handleChange, newComment }) => {
  return (
    <Form onSubmit={handlePost}>
      <label>
        <TextArea
          name="newComment"
          cols="70"
          rows="6"
          onChange={handleChange}
          value={newComment}
          required
          placeholder="Add new comment..."
        ></TextArea>
      </label>
      <Button>Post</Button>
    </Form>
  );
};

export default NewComment;
