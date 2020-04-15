import React from 'react';
import VoteChanger from './VoteChanger';

const CommentCard = (props) => {
  return (
    <li className="CommentCard">
      <VoteChanger
        votes={props.comment.votes}
        comment_id={props.comment.comment_id}
      />
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
