import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    };
  }
  render() {
    return (
      <Home user={this.state.user}/>
    );
  }
}

export default App;
