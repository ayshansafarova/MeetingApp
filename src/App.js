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

        const meetingsRef = firebase.database().ref('meetings/' + u.uid);
        meetingsRef.on('value', snapshot => {
          let m = snapshot.val();
          let meetingList = [];
          
          for(let item in m){
            meetingList.push({
              meetingID: item,
              meetingName: m[item].meetingName
              //there was a problem . m[item] instead of item
            });
          }

          this.setState({
            meetings: meetingList,
            numberOfMeetings: meetingList.length
          })
        })
      } else {
        this.setState({
          user: null
        })
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

  addMeeting = meetingName => {
    const ref = firebase
    .database()
    .ref(`meetings/${this.state.user.uid}`);
    ref.push({meetingName: meetingName});
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
          <Meetings path = "/meetings" addMeeting = {this.addMeeting} meetings = {this.state.meetings}/>
        </Router>
      </div>
    );
  }
}

export default App;


