import React from 'react';
import VoteChanger from './VoteChanger';

const SingleArticle = (props) => {
  const {
    title,
    author,
    created_at,
    body,
    topic,
    votes,
    article_id,
    comment_count,
  } = props.article;
  return (
    <article>
      <VoteChanger votes={votes} id={article_id} votee="articles" />

      <p>{title}</p>
      <p>{topic}</p>

      <p>submitted at {created_at}</p>
      <p>by {author}</p>
      <p>{body}</p>
      <p>{comment_count} comments</p>
    </article>
  );
};

export default SingleArticle;
