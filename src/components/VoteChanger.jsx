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
`;

const VoteButton = styled.button`
  width: 2rem;
`;

class VoteChanger extends Component {
  state = {
    voteChange: 0,
  };

  render() {
    const { voteChange } = this.state;

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
        >
          +
        </VoteButton>
        {this.props.votes + this.state.voteChange}
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
        >
          -
        </VoteButton>
      </Voting>
    );
  }

  handleVote = (change) => {
    this.setState((currentState) => {
      return { voteChange: currentState.voteChange + change };
    });
    api.patchVote(this.props.id, this.props.votee, change).catch(console.log);
  };
}

export default VoteChanger;
