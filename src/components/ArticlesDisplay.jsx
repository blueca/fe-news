import React from 'react';
import styled from 'styled-components';
import { col } from '../styles/colours';
import Nav from './Nav';
import ArticlesList from './ArticlesList';

const Section = styled.section`
  background-color: ${col.layer1};
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
  box-shadow: 0 0 0.2rem black;

  @media (max-width: 768px) {
    padding: 0.2rem;
    margin: 0.5rem 0.2rem;
  }
`;

class ArticlesDisplay extends React.Component {
  state = {
    sorting: { sort_by: 'votes', order: 'desc' },
  };

  render() {
    const { topic, user } = this.props;
    const { sorting } = this.state;
    document.title = `News-AG | ${topic}`;

    return (
      <Section>
        <Nav topic={topic} handleChange={this.handleChange} sorting={sorting} />
        <ArticlesList topic={topic} sorting={sorting} user={user} />
      </Section>
    );
  }

  componentDidMount = () => {
    const sorting = JSON.parse(sessionStorage.getItem('sorting'));
    if (sorting) {
      this.setState({ sorting });
    } else {
      sessionStorage.setItem('sorting', JSON.stringify(this.state.sorting));
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { sorting } = this.state;
    if (
      prevState.sorting.sort_by !== sorting.sort_by ||
      prevState.sorting.order !== sorting.order
    ) {
      const sorting = JSON.parse(sessionStorage.getItem('sorting'));
      if (sorting) {
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
