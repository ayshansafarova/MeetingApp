import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

  var config = {
    apiKey: "AIzaSyCGfutzmOiNz8q4YUv6tLitp195vMXqgMc",
    authDomain: "meetingapp-82431.firebaseapp.com",
    databaseURL: "https://meetingapp-82431.firebaseio.com",
    projectId: "meetingapp-82431",
    storageBucket: "meetingapp-82431.appspot.com",
    messagingSenderId: "337872695661"
  };

  firebase.initializeApp(config);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;