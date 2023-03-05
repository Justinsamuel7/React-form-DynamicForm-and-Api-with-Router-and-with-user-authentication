import React from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Career from "./Career"
import About from "./About"


function Links(){
  return(
    <div>
      <ul>
        <li><Link to="/Career">Career</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/">Log out</Link></li>
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {Links()}
      <h1>Successfully Logged in,This is home page</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}
    
