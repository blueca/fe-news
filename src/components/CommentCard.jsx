import React from 'react';
import styled from 'styled-components';
import { col } from '../styles/colours';
import VoteChanger from './VoteChanger';

const Li = styled.li`
  display: flex;
  background-color: ${col.layer2};
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.2rem black;
`;

const CommentDetails = styled.section`
  display: flex;
  justify-content: space-between;
`;

const P = styled.p`
  margin: 0.2rem 2rem 0.2rem 0;
  align-self: baseline;
  font-size: 0.9rem;
`;

const UserP = styled(P)`
  background-color: #bb86fc;
  color: #121212;
  border-radius: 0.3rem;
  padding: 0.2rem;
`;

const DateP = styled(P)`
  font-size: 0.8rem;
`;

const CommentBody = styled.p`
  margin: 0.5rem 0 1rem 0;
`;

const Section = styled.section`
  width: 100%;
`;

const CommentCard = ({ comment, user, handleDelete }) => {
  const { votes, comment_id, author, created_at, body } = comment;

  return (
    <Li>
      <VoteChanger votes={votes} id={comment_id} votee="comments" />
      <Section>
        <CommentDetails>
          {author === user ? <UserP>{author}</UserP> : <P>{author}</P>}

          <DateP>{new Date(created_at).toLocaleDateString()}</DateP>
        </CommentDetails>
        <CommentBody>{body}</CommentBody>
        {author === user && (
          <button onClick={() => handleDelete(comment_id)}>Delete</button>
        )}
      </Section>
    </Li>
  );
};

export default CommentCard;
