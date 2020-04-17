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

const VoteButton = styled.div`
  width: 0;
  height: 0;
  border-left: 0.8rem solid transparent;
  border-right: 0.8rem solid transparent;
  margin: 0.4rem 0;
`;

const UpVote = styled(VoteButton)`
  border-bottom: 0.8rem solid
    ${(props) => {
      return props.status === 'Up1' ? 'orangered' : 'white';
    }};
`;

const DownVote = styled(VoteButton)`
  border-top: 0.8rem solid
    ${(props) => {
      return props.status === 'Down-1' ? 'royalblue' : 'white';
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
        <UpVote
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
        ></UpVote>
        {votes + voteChange}
        <DownVote
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
        ></DownVote>
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
