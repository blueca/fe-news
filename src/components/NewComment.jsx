import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 5rem;
`;

const NewComment = ({ handlePost, handleChange, newComment }) => {
  return (
    <Form onSubmit={handlePost}>
      <label>
        <textarea
          name="newComment"
          cols="70"
          rows="6"
          onChange={handleChange}
          value={newComment}
          placeholder="Add new comment..."
        ></textarea>
      </label>
      <Button>Post</Button>
    </Form>
  );
};

export default NewComment;
