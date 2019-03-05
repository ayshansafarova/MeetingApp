import React, { Component } from 'react';
import {Router, navigate} from '@reach/router';
import firebase from './components/data-provider/firebase';
import './App.css';

import Home from './components/home/home';
import Welcome from './components/home/welcome';
import Navigation from './components/navigation/navigation';
import Login from './components/account/login';
import Register from './components/account/register';
import Meetings from './components/meeting/meetings';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      displayName: null,
      userID: null
    };
  }

  componentDidMount(){
    const ref = firebase.database().ref('user');

    ref.on('value', snapshot => {
      let u = snapshot.val();
      this.setState({ user: u});
    })
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(u => {
      u.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: u,
          displayName: u.displayName,
          userID: u.uid
        });
        navigate('/meetings');
      })
    })
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user}/>
        {this.state.user && <Welcome user = {this.state.displayName}/>}

        <Router>
          <Home path = "/" user={this.state.user}/>
          <Login path = "/login" />
          <Register path = "/register" registerUser = {this.registerUser}/>
          <Meetings path = "/meetings" />
        </Router>
      </div>
    );
  }
}

export default App;


