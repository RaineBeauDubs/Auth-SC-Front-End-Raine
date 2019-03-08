import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state ={
    username: 'MooseTheDog',
    password: 'Moosifer'
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault()
    const endpoint = 'http://localhost:3300/api/login';

    axios
      .post(endpoint, this.state)
      .then(response => {
        localStorage.setItem('jwt', response.data.token)
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <h2>Log-In</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'/>
            <input
              name='username'
              id='username'
              type='text'
              value={this.state.username} 
              onChange={this.handleInput}
            />
          <label htmlFor='password'/>
            <input
              name='password'
              id='password'
              type='password'
              value={this.state.password} 
              onChange={this.handleInput}
            />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;