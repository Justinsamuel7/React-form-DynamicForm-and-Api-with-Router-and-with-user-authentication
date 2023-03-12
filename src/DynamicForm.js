import React from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function DynamicForms() {
  return (
    <div>
      <br/>
      <br/>
      <h1>Dynamic Forms</h1>
      <Link to="/">Home</Link>
      <br/>
      <br/>
      <input type="text"/>
    </div>
  );
}
