import React from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function Career() {

let navigate=useNavigate()
function goto()
{
  navigate('/')
}

  return (
    <div>
      <h1>This is Career page</h1>
      <button onClick={goto}>Navigate through button instead of Link</button>
      <Link to="/">Home</Link>
      <br/>
      <br/>
      <Link to="/About">About</Link>
    </div>
  );
}
