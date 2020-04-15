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
        <Nav topic={topic} handleChange={this.handleChange} sorting={sorting} />
        <ArticlesList topic={topic} sorting={sorting} />
      </div>
    );
  }

  componentDidMount = () => {
    const sorting = JSON.parse(sessionStorage.getItem('sorting'));
    if (sorting) {
      this.setState({ sorting });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (
      prevState.sorting.sort_by !== this.state.sorting.sort_by ||
      prevState.sorting.order !== this.state.sorting.order
    ) {
      const sorting = JSON.parse(sessionStorage.getItem('sorting'));
      if (sorting) {
        // console.log('storageUpdate: ', sorting);

        this.setState({ sorting });
      }
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState((currentState) => {
      const articleSorting = { ...currentState.sorting };
      articleSorting[name] = value;
      sessionStorage.setItem('sorting', JSON.stringify(articleSorting));
      return { sorting: articleSorting };
    });
  };
}

export default ArticlesDisplay;
