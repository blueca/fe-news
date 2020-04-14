import React from 'react';
import { Router } from '@reach/router';
import ArticlesDisplay from './ArticlesDisplay';
import SingleArticle from './SingleArticle';

const Articles = ({ topic_slug }) => {
  return (
    <section className="Articles">
      <Router>
        <ArticlesDisplay path="/" topic={topic_slug} />
        <SingleArticle path="/:article_id" />
      </Router>
    </section>
  );
};

export default Articles;
