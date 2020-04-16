import React from 'react';
import { Router, Redirect } from '@reach/router';
import Articles from './Articles';
import ErrorPage from './ErrorPage';
// import ArticleContent from './ArticleContent';

const PageContent = ({ user }) => {
  return (
    <section>
      <Router>
        <Redirect from="/" to="/topics/all" noThrow />
        {/* <Articles path="/" /> */}
        <Articles path="/topics/:topic_slug/*" user={user} />
        <ErrorPage default status={404} msg="Page not found" />
        {/* <ArticleContent path="/:topic_slug/:article_id" /> */}
      </Router>
    </section>
  );
};

export default PageContent;
