import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export const Menu = () => {
  <nav className="menu">
    <link to="/activity" activeClassName="selected">  
    </link>
    <link to="/workouts" activeClassName="selected">      
    </link>
    <link to="/addworkout" activeClassName="selected">      
    </link>
  </nav>
}

export default Menu;