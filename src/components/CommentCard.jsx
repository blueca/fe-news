import React from 'react';

const CommentCard = (props) => {
  return (
    <li>
      <p>{props.comment.votes} votes</p>
      <p>{props.comment.author}</p>
      <p>{props.comment.created_at}</p>
      <p>{props.comment.body}</p>
    </li>
  );
};

export default CommentCard;
