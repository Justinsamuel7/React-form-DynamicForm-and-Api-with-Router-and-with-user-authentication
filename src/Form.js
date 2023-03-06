import React from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function Form() {
  return (
    <div>
      <h1>This is Form page</h1>
      <br/>
      <br/>
      <Link to="/">Home</Link>
    </div>
  );
}
