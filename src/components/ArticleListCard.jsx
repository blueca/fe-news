import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import VoteChanger from './VoteChanger';

const ArticleCard = styled.section`
  display: flex;
  background-color: green;
  border-radius: 0.3rem;
  margin: 1rem 0;
  padding: 0.5rem;
  align-items: center;
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
  color: black;
  text-decoration: none;

  &:visited {
    color: #999999;
  }
`;

const ArticleTitle = styled.h2`
  margin: 0;
`;

const P = styled.p`
  margin: 0.2rem 0.4rem 0 0;
`;

const ArticleListCard = (props) => {
  const { article } = props;
  return (
    <ArticleCard>
      <VoteChanger
        votes={article.votes}
        id={article.article_id}
        votee="articles"
      />
      <StyledDiv>
        <ArticleTitle>
          <StyledLink to={`/topics/${article.topic}/${article.article_id}`}>
            {article.title}
          </StyledLink>
        </ArticleTitle>
        <ArticleCardDetails>
          <P>Posted at {article.created_at} </P>
          <P> by {article.author} </P>
          <P> to {article.topic}</P>
        </ArticleCardDetails>
        <P>{article.comment_count} comments</P>
      </StyledDiv>
    </ArticleCard>
  );
};

export default ArticleListCard;
