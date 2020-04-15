import React from 'react';
import VoteChanger from './VoteChanger';

const SingleArticle = (props) => {
  const {
    title,
    author,
    created_at,
    body,
    comment_count,
    topic,
    votes,
    article_id,
  } = props.article;
  return (
    <div>
      <VoteChanger votes={votes} id={article_id} votee="articles" />

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
