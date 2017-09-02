import React, {Component} from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';



class SignupPage extends Component {

  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  render() {
    return (
      <div className='SignupPage'> 
        <h2>Signup Page</h2>
        <SignupForm
        />  
      </div>
    );
  }
};


export default SignupPage;


