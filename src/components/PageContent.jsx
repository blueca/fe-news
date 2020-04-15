import React from 'react';
import { Router, Redirect } from '@reach/router';
import Articles from './Articles';
// import ArticleContent from './ArticleContent';

const PageContent = ({ user }) => {
  return (
    <section>
      <Router>
        <Redirect from="/" to="/topics/all" noThrow />
        {/* <Articles path="/" /> */}
        <Articles path="/topics/:topic_slug/*" user={user} />
        {/* <ArticleContent path="/:topic_slug/:article_id" /> */}
      </Router>
    </section>
  );
};

export default PageContent;
