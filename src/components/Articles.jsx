import React from 'react';
import Nav from './Nav';
import ArticlesList from './ArticlesList';

const Articles = ({ topic_slug }) => {
  return (
    <section className="Articles">
      <Nav />
      <ArticlesList topic={topic_slug} />
    </section>
  );
};

export default Articles;
