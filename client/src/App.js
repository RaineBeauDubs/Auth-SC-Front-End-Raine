import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import Login from './login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to='/login'>Log-In</NavLink>
          </nav>
        </header>
        <h2>Welcome to Jokes!</h2>
        <main>
          <Route path='/login' component={Login} />
        </main>
      </div>
    );
  }
}

export default App;
