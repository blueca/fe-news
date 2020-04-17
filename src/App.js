import React from 'react';
import Header from './components/Header';
import './styles/index.css';
import PageContent from './components/PageContent';
import * as api from './utils/api';

class App extends React.Component {
  state = {
    user: '',
    avatar: '',
  };

  render() {
    const { user, avatar } = this.state;
    return (
      <div className="App">
        <Header
          user={user}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}
          avatar={avatar}
        />
        <PageContent user={user} />
      </div>
    );
  }

  handleLogin = () => {
    api.getUser('grumpy19').then((user) => {
      const { username, avatar_url } = user;
      this.setState({ user: username, avatar: avatar_url });
    });
  };

  handleLogout = () => {
    this.setState({ user: '', avatar: '' });
  };
}

export default App;
