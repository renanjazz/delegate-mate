import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/delegateMateBlack.png';

const NavBar = () => {
  return (
    <nav className='navbar'>
      
      <Link to="/">
        <img
        src={logo}
        alt='logo'
        style={{ height: "50px" }}
        className='logo'
      /> 
      </Link>
      <Link to="/about">
        <button className='navbar-button'>About</button>
      </Link>
      <Link to="/terms">
        <button className='navbar-button'>Terms</button>
      </Link>
      <Link to="/open-requests">
        <button className='navbar-button'>Account</button>
      </Link>
    </nav>
  );
};

export default NavBar;