import React, { Component } from 'react';
import { render } from 'react-dom'
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
import LoginPage from '../LoginPage/LoginPage';
import ActivityTracker from '../ActivityTracker/ActivityTracker'
import Workouts from '../Workouts/Workouts';
import AddWorkout from '../AddWorkout/AddWorkout';
import {Menu} from '../../components/Menu/Menu';
// I'd like to add < Menu /> to inward facing pages

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = Object.assign(
    //   
    //   this.getInitialState()
    // );
  }

  /*---------- Helper Methods ----------*/
  // getInitialState() {
  //   return {
  //     
  //   };
  // }
  /*---------- Callback Methods ----------*/
  handleLogout = () => {
    userService.logout();
    this.setState({user: null});
  }

  handleSignup = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogin = () => {
    this.setState({user: userService.getUser()});
  }

  /*---------- Lifecycle Methods ----------*/
  componentDidMount() {
    let user = userService.getUser();
    this.setState({user});
  }

  render() {
    return (
      <div>
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

              <Route exact path='/login' render={(props) => 
                <LoginPage
                  // user={this.state.user}
                  {...props}
                  handleLogin={this.handleLogin}
                />
              }/>
              
              <Route exact path='/activity' render={(props) => 
                <ActivityTracker total={6}
                                reformer={3}
                                mat={2}
                                goal={20}
                />
              }/> 

              <Route exact path='addworkout' render={(props) =>
                <AddWorkout 
                />
              }/>

              <Route exact path='/workouts' render={(props) => 
                <Workouts days={
                  [
                    {
                      date: new Date("9/1/2017"),               gym: "Equinox",
                      reformer: true,
                      mat: false
                    },
                    {
                      date: new Date("9/2/2017"),
                      gym: "Balanced Concepts Pilates",
                      reformer: true,
                      mat: false
                    },
                    {
                      date: new Date("9/3/2017"),
                      gym: "Core Align Studios",
                      reformer: false,
                      mat: true
                    },
                    {
                      date: new Date("9/4/2017"),
                      gym: "Mission street Yoga",
                      reformer: true,
                      mat: false
                    },
                  ]
                }
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
