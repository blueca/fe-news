import React from 'react';
import { Router, Redirect } from '@reach/router';
import Articles from './Articles';
// import ArticleContent from './ArticleContent';

const PageContent = () => {
  return (
    <section className="MainSection">
      <Router>
        <Redirect from="/" to="/topics/all" noThrow />
        {/* <Articles path="/" /> */}
        <Articles path="/topics/:topic_slug/*" />
        {/* <ArticleContent path="/:topic_slug/:article_id" /> */}
      </Router>
    </section>
  );
};

export default PageContent;
