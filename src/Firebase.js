import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJfaRz-uC6fI5iAKTRrCJ61ZmFq8lb3rs",
    authDomain: "react-spas-b3d65.firebaseapp.com",
    databaseURL: "https://react-spas-b3d65.firebaseio.com",
    projectId: "react-spas-b3d65",
    storageBucket: "react-spas-b3d65.appspot.com",
    messagingSenderId: "813933447102",
    appId: "1:813933447102:web:05c9826c9bfc4343ff5bef",
    measurementId: "G-77SL6L92N3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();

  export default firebase;