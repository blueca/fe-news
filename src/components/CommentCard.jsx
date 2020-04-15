import React from 'react';

const CommentCard = (props) => {
  return (
    <li className="CommentCard">
      <p>{props.comment.votes} votes</p>
      <p>{props.comment.author}</p>
      <p>{props.comment.created_at}</p>
      <p>{props.comment.body}</p>
      {props.comment.author === props.user && (
        <button onClick={() => props.handleDelete(props.comment.comment_id)}>
          Delete
        </button>
      )}
    </li>
  );
};

export default CommentCard;
