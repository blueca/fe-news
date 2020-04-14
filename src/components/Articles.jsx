import React from 'react';
import Nav from './Nav';
import ArticlesList from './ArticlesList';

const Articles = () => {
  return (
    <section className="Articles">
      <Nav />
      <ArticlesList />
    </section>
  );
};

export default Articles;
