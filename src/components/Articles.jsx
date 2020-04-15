import React from 'react';
import { Router } from '@reach/router';
import ArticlesDisplay from './ArticlesDisplay';
import ArticlePage from './ArticlePage';

const Articles = ({ topic_slug, user }) => {
  return (
    <section className="Articles">
      <Router>
        <ArticlesDisplay path="/" topic={topic_slug} user={user} />
        <ArticlePage path="/:article_id" user={user} />
      </Router>
    </section>
  );
};

export default Articles;
