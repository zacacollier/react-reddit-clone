import React, { Component } from 'react';
import axios from 'axios';
import Constants from '../constants';
import './App.css';

const { subRedditURL } = Constants.helpers;

class App extends Component {
  componentWillMount() {
    axios.get(subRedditURL('funny'))
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
