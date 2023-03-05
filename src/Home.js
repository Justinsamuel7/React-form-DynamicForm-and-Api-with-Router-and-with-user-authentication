import React from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';



export default function Home() {
  return (
    <div>
      <h1>Successfully Logged in,This is home page</h1>

      <ul>
        <li><Link to="/Career">Career</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/">Log out</Link></li> 
        {/* Logout path is wrong , need to modify */}
      </ul>

      
    </div>
  );
}
    
