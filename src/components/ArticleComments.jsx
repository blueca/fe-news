import React from 'react';
import styled from 'styled-components';
import CommentCard from './CommentCard';

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ArticleComments = ({ comments, user, handleDelete }) => {
  return (
    <div>
      <Ul>
        {comments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              key={comment.comment_id}
              user={user}
              handleDelete={handleDelete}
            />
          );
        })}
      </Ul>
    </div>
  );
};

export default ArticleComments;
