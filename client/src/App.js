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
            <NavLink className="link" to='/register'>Sign-Up</NavLink>
            <NavLink className="link" to='/login'>Log-In</NavLink>
            <NavLink className="link" to='/jokes'>See Jokes</NavLink>
            <p className="link" onClick={this.logout}>Log-Out</p>
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
