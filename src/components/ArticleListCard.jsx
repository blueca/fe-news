import React from 'react';
import { Link } from '@reach/router';
import VoteChanger from './VoteChanger';

const ArticleListCard = (props) => {
  const { article } = props;
  return (
    <div className="ArticleListCard">
      <VoteChanger
        votes={article.votes}
        id={article.article_id}
        votee="articles"
      />
      <p>
        <Link to={`/topics/${article.topic}/${article.article_id}`}>
          {article.title}
        </Link>
      </p>
      <p>{article.votes} votes</p>
      <p>Posted at {article.created_at}</p>
      <p>by {article.author}</p>
      <p>to {article.topic}</p>
      <p>{article.comment_count} comments</p>
    </div>
  );
};

export default ArticleListCard;
