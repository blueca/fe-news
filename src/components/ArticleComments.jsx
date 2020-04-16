import React from 'react';
import styled from 'styled-components';
import CommentCard from './CommentCard';

const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ArticleComments = (props) => {
  return (
    <div>
      <Ul>
        {props.comments.map((comment) => {
          return (
            <CommentCard
              comment={comment}
              key={comment.comment_id}
              user={props.user}
              handleDelete={props.handleDelete}
            />
          );
        })}
      </Ul>
    </div>
  );
};

export default ArticleComments;
