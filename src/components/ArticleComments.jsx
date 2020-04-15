import React from 'react';
import CommentCard from './CommentCard';

const ArticleComments = (props) => {
  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
};

export default ArticleComments;
