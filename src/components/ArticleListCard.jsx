import React from 'react';
import { Link } from '@reach/router';
import { col } from '../styles/colours';
import styled from 'styled-components';
import VoteChanger from './VoteChanger';

const ArticleCard = styled.section`
  display: flex;
  background-color: ${col.layer2};
  border-radius: 0.3rem;
  margin: 1rem 0;
  padding: 0.5rem;
  align-items: center;
  box-shadow: 0 0 0.2rem black;

  &:hover {
    box-shadow: 0 0 0.2rem rgb(100, 100, 100);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ArticleCardDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
  color: rgb(240, 240, 240);
  text-decoration: none;

  &:visited {
    color: rgb(179, 179, 179);
  }
  &:hover {
    color: white;
  }
`;

const ArticleTitle = styled.h2`
  margin: 0;
`;

const P = styled.p`
  margin: 0.2rem 0.4rem 0 0;
`;

const LinkBold = styled(StyledLink)`
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

const ArticleListCard = ({ article, user }) => {
  const {
    votes,
    article_id,
    topic,
    title,
    created_at,
    author,
    comment_count,
  } = article;

  return (
    <ArticleCard>
      <VoteChanger votes={votes} id={article_id} votee="articles" user={user} />
      <StyledDiv>
        <ArticleTitle>
          <StyledLink to={`/topics/${topic}/${article_id}`}>{title}</StyledLink>
        </ArticleTitle>
        <ArticleCardDetails>
          <P>Posted at {new Date(created_at).toLocaleDateString()} </P>
          <P> by {author} </P>
          <P>
            {' '}
            to <LinkBold to={`/topics/${topic}`}>{topic}</LinkBold>
          </P>
        </ArticleCardDetails>
        <P>{comment_count} comments</P>
      </StyledDiv>
    </ArticleCard>
  );
};

export default ArticleListCard;
