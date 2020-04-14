import React, { Component } from 'react';
import CommentCard from './CommentCard';

const ArticleComments = (props) => {
  console.log(props.comments);
  return (
    <div>
      <ul>
        {props.comments.map((comment) => {
          return <CommentCard comment={comment} key={comment.comment_id} />;
        })}
      </ul>
    </div>
  );
};

export default ArticleComments;
