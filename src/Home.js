import React from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

// function logout()
// {
//   // setIsLogin(false);
//   // navigate('/Sign in');
//   localStorage.clear();

// }

export default function Home() {
  return (
    <div>
      <h1>Successfully Logged in,This is home page</h1>

      <ul>
        <li><Link to="/Form">Survey form</Link></li>
        <li><Link to="/Career">Career</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Sign in">Log out</Link></li> 
        {/* <li><Link to="/Sign in" onClick={logout}>Log out</Link></li>  */}
      </ul>

      
    </div>
  );
}
    
