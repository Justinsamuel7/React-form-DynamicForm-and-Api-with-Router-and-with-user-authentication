import React from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function Form() {

  let [FormTemplate, setFormTemplate] = useState({
    name: '',
    age: '',
    gender: '',
    phnumber: '',
    mail: '',
    dept: ''
  });


  function submit()
  {
    alert(234567)
  }

  return (
    <div>
      <br/>
      <br/>
      <Link to="/">Home</Link>
      <br/>
      <br/>
      <h2>Form Page</h2>
      <form action="" onSubmit={submit}>
      <input type="text" name="name" placeholder="Name"/>
      <br/>
      <br/>
      <input type="number" name="age" placeholder="Age"/>
      <br/>
      <br/>
      <input type="text" name="gender" placeholder="Gender"/>
      <br/>
      <br/>
      <input type="text" name="phnumber" placeholder="Contact Number"/>
      <br/>
      <br/>
      <input type="mail" name="mail" placeholder="Mail ID"/>
      <br/>
      <br/>
      <input type="text" name="dept" placeholder="Department"/>
      <br/>
      <br/>
      <button type="submit">Submit</button>



      </form>

    </div>
  );
}
