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
    firebase.auth().onAuthStateChanged(u => {
      if(u){
        this.setState({
          user: u,
          displayName: u.displayName,
          userID: u.uid
        });
      }
    });
    // const ref = firebase.database().ref('user');

    // ref.on('value', snapshot => {
    //   let u = snapshot.val();
    //   this.setState({ user: u});
    // })
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

  logoutUser = e => {
    e.preventDefault();
    this.setState({
      user: null,
      displayName: null,
      userID: null
    });

    firebase.auth().signOut().then(() => {
      navigate('/login');
    })
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} logoutUser = {this.logoutUser}/>
        {this.state.user && 
          <Welcome userName = {this.state.displayName}/>
        }

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


