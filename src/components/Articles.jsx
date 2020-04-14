import React from 'react';
import { Router } from '@reach/router';
import ArticlesDisplay from './ArticlesDisplay';
import ArticlePage from './ArticlePage';

const Articles = ({ topic_slug }) => {
  return (
    <section className="Articles">
      <Router>
        <ArticlesDisplay path="/" topic={topic_slug} />
        <ArticlePage path="/:article_id" />
      </Router>
    </section>
  );
};

export default Articles;
