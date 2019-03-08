import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state ={
    username: '',
    password: ''
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
        this.props.history.push('/jokes');
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <h2 className='LSH2'>Log-In</h2>
        <form className='LSForm' onSubmit={this.handleSubmit}>
          <label htmlFor='username'/>
            <input className='LSInput'
              name='username'
              id='username'
              type='text'
              value={this.state.username} 
              onChange={this.handleInput}
            />
          <label htmlFor='password'/>
            <input className='LSInput'
              name='password'
              id='password'
              type='password'
              value={this.state.password} 
              onChange={this.handleInput}
            />
          <button className='LSButton' type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default Login;