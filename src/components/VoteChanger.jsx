import React, { Component } from 'react';
import * as api from '../utils/api';

class VoteChanger extends Component {
  state = {
    voteChange: 0,
  };

  render() {
    const { voteChange } = this.state;

    return (
      <section>
        <button
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
        </button>
        {this.props.votes + this.state.voteChange}
        <button
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
        </button>
      </section>
    );
  }

  handleVote = (change) => {
    this.setState((currentState) => {
      return { voteChange: currentState.voteChange + change };
    });
    api.patchVote(this.props.comment_id, 'comments', change).catch(console.log);
  };
}

export default VoteChanger;
