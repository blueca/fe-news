import React, { Component } from 'react';
import styled from 'styled-components';
import * as api from '../utils/api';

const Voting = styled.section`
  display: flex;
  flex-direction: column;
  width: 2rem;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  height: 100%;
`;

const VoteButton = styled.button`
  width: 2rem;
  background-color: ${(props) => {
    if (props.status === 'Up1') return 'orangered';
    if (props.status === 'Down-1') return 'royalblue';
  }};
`;

class VoteChanger extends Component {
  state = {
    voteChange: 0,
  };

  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;

    return (
      <Voting>
        <VoteButton
          onClick={() => {
            if (voteChange === 0) {
              this.handleVote(1);
            } else if (voteChange === 1) {
              this.handleVote(-1);
            } else if (voteChange === -1) {
              this.handleVote(2);
            }
          }}
          status={`Up${voteChange}`}
        >
          +
        </VoteButton>
        {votes + voteChange}
        <VoteButton
          onClick={() => {
            if (voteChange === 0) {
              this.handleVote(-1);
            } else if (voteChange === -1) {
              this.handleVote(1);
            } else if (voteChange === 1) {
              this.handleVote(-2);
            }
          }}
          status={`Down${voteChange}`}
        >
          -
        </VoteButton>
      </Voting>
    );
  }

  handleVote = (change) => {
    const { id, votee } = this.props;

    this.setState((currentState) => {
      return { voteChange: currentState.voteChange + change };
    });
    api.patchVote(id, votee, change).catch(console.log);
  };
}

export default VoteChanger;
