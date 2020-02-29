import React, {Component} from 'react';
import { Router , navigate} from '@reach/router';
import firebase from './Firebase';

import Home from './Home';
import Welcome from './Welcome';
import Navigation from './Navigation';
import Login from './Login'
import Meetings from './Meetings'
import Register from './Register'



class App extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      displayName: '',
      userId: '',
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged( FBUser => {
      if(FBUser){this.setState({
        user: FBUser,
        displayName: FBUser.displayName,
        userId: FBUser.uid,
      })}
    })
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      }).then(() => {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userId: FBUser.uid,
        });
        navigate('/meetings');
      })
    })
  }

  logOutUser = e => {
    e.preventDefault();
    this.setState({
      user: null,
      displayName: null,
      userId: null,
    });

    firebase.auth().signOut().then(() => {
      navigate('/login');
    })
  }

  render()
  {
    return (
      <div>
      <Navigation user={this.state.user} logOutUser ={this.logOutUser}/>
      {this.state.user ? <Welcome userName={this.state.displayName} logOutUser ={this.logOutUser}/> : null}

      <Router>
        <Home path="/" user={this.state.user}/>
        <Login path="/login" user={this.state.user}/>
        <Meetings path="/meetings" user={this.state.user}/>
        <Register path="/register" user={this.state.user} registerUser={this.registerUser}/>
      </Router>
      
      </div>
    );
  }
}

export default App;
