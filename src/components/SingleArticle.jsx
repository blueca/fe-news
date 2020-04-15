import React from 'react';

const SingleArticle = (props) => {
  const {
    title,
    author,
    created_at,
    body,
    comment_count,
    topic,
    votes,
  } = props.article;
  return (
    <div>
      <p>{votes} votes</p>

      <p>{title}</p>
      <p>{topic}</p>

      <p>submitted at {created_at}</p>
      <p>by {author}</p>
      <p>{body}</p>
      <p>{props.commentCount} comments</p>
    </div>
  );
};

export default SingleArticle;
