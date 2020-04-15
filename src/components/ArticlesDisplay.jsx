import React from 'react';
import Nav from './Nav';
import ArticlesList from './ArticlesList';

class ArticlesDisplay extends React.Component {
  state = {
    sorting: { sort_by: 'votes', order: 'desc' },
  };

  render() {
    const { topic } = this.props;
    const { sorting } = this.state;
    return (
      <div>
        <Nav topic={topic} handleChange={this.handleChange} />
        <ArticlesList topic={topic} sorting={sorting} />
      </div>
    );
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState((currentState) => {
      const newSorting = { ...currentState.sorting };
      newSorting[name] = value;
      return { sorting: newSorting };
    });
  };
}

export default ArticlesDisplay;
