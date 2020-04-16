import React from 'react';
import { Router } from '@reach/router';
import ArticlesDisplay from './ArticlesDisplay';
import ArticlePage from './ArticlePage';
import ErrorPage from './ErrorPage';

const Articles = ({ topic_slug, user }) => {
  return (
    <section>
      <Router>
        <ArticlesDisplay path="/" topic={topic_slug} user={user} />
        <ArticlePage path="/:article_id" user={user} />
        <ErrorPage default status={404} msg="Page not found" />
      </Router>
    </section>
  );
};

export default Articles;
