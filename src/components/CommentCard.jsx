import React from 'react';
import styled from 'styled-components';
import VoteChanger from './VoteChanger';

const Li = styled.li`
  display: flex;
  background-color: red;
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 0.3rem;
`;

const CommentDetails = styled.section`
  display: flex;
`;

const P = styled.p`
  margin: 0.2rem 2rem 0.2rem 0;
  align-self: baseline;
  font-size: 0.9rem;
`;

const UserP = styled(P)`
  background-color: blue;
  color: white;
  border-radius: 0.3rem;
  padding: 0.2rem;
`;

const DateP = styled(P)`
  font-size: 0.8rem;
`;

const CommentBody = styled.p`
  margin: 0.5rem 0 1rem 0;
`;

const CommentCard = (props) => {
  return (
    <Li>
      <VoteChanger
        votes={props.comment.votes}
        id={props.comment.comment_id}
        votee="comments"
      />
      <section>
        <CommentDetails>
          {props.comment.author === props.user ? (
            <UserP>{props.comment.author}</UserP>
          ) : (
            <P>{props.comment.author}</P>
          )}

          <DateP>{props.comment.created_at}</DateP>
        </CommentDetails>
        <CommentBody>{props.comment.body}</CommentBody>
        {props.comment.author === props.user && (
          <button onClick={() => props.handleDelete(props.comment.comment_id)}>
            Delete
          </button>
        )}
      </section>
    </Li>
  );
};

export default CommentCard;
