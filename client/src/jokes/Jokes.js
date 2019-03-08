import React from 'react';
import axios from 'axios';

import requiresAuth from '../auth/requiresAuth';

class Jokes extends React.Component {
  state = {
    jokes: [],
  }
  render() {
    return (
      <div>
        <h2>Did you say you're wanting jokes? Well, hello, Wanting Jokes, I'm Dad!</h2>
        <ul>
          {this.state.jokes.map(joke => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </div>
    )
  }

  componentDidMount() {
    axios
      .get('/jokes')
      .then(response => {
        this.setState({
          jokes: response.data
        })
      });
  }
}

export default requiresAuth(Jokes);