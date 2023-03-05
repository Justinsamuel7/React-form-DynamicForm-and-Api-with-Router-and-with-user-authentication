import React from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function Career() {
  return (
    <div>
      <h1>This is Career page</h1>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </div>
  );
}
