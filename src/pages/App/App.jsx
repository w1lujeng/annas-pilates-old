import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import userService from '../../utils/userService';
import AboutPage from '../AboutPage/AboutPage';
import SignupPage from '../SignupPage/SignupPage';
import ActivityTracker from '../ActivityTracker/ActivityTracker'

class App extends Component {
  constructor(props) {
    super(props);
  }

  /*---------- Helper Methods ----------*/
  /*---------- Callback Methods ----------*/
  /*---------- Lifecycle Methods ----------*/


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Anna's Pilates</h1>
        </div>
          <Router>
            <Switch>
              <Route exact path='/about' render={
                () =>
                  <AboutPage
                  />
                }/>  
              <Route exact path='/signup' render={(props) => 
                <SignupPage
                  {...props}
                  handleSignup={this.handleSignup}
                />
              }/> 
              <Route exact path='/activity' render={(props) => 
                <ActivityTracker
                  
                />
              }/>   

              }

         
          </Switch> 
        </Router>
      </div>
    );
  }
}

export default App;
