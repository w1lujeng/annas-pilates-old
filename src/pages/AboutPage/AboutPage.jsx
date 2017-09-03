import React from 'react';
import NavBar from '../../components/NavBar/NavBar'

const AboutPage = (props) => {


  return (
    <div>
    <NavBar user={props.user} handleLogout={props.handleLogout} />
    <div> 
      
      <h2>About Page</h2>
    </div>
    </div>
  )
}



export default AboutPage;