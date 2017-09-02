import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import userService from '../../utils/userService'


class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConf: ''
    };
  }






render() {
  return (
    <p>This is the signup form</p>
  )  


  }
};

export default SignupForm;