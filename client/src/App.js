import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import Register from './register/Register';
import Login from './login/Login';
import Jokes from './jokes/Jokes';

class App extends Component {

  logout = () => {
    localStorage.removeItem('jwt');
    this.props.history.push('/login');
  };

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to='/register'>Sign-Up</NavLink>
            <NavLink to='/login'>Log-In</NavLink>
            <NavLink to='/jokes'>See Jokes</NavLink>
            <button onClick={this.logout}>Log-Out</button>
          </nav>
        </header>
        <h2>Welcome to Jokes!</h2>
        <main>
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/jokes' component={Jokes} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
