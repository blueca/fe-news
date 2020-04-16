import React from 'react';
import { Router, Redirect } from '@reach/router';
import Articles from './Articles';
import ErrorPage from './ErrorPage';

const PageContent = ({ user }) => {
  return (
    <section>
      <Router>
        <Redirect from="/" to="/topics/all" noThrow />
        <Articles path="/topics/:topic_slug/*" user={user} />
        <ErrorPage default status={404} msg="Page not found" />
      </Router>
    </section>
  );
};

export default PageContent;
