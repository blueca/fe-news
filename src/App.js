import React from 'react';
import Header from './components/Header';
import './styles/index.css';
import PageContent from './components/PageContent';

class App extends React.Component {
  state = {
    user: 'grumpy19',
  };

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <Header user={user} />
        <PageContent user={user} />
      </div>
    );
  }
}

export default App;
