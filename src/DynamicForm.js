import React, {useState} from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';


export default function DynamicForms() {

  let [Dy_Form, setDy_Form] = useState([
    {
      fname : '',
      lname : ''
    },
  ])

  function handleSubmit()
  {

  }

  

  return (
    <div>
      <br/>
      <br/>
      <h1>Dynamic Forms</h1>
      <Link to="/">Home</Link>
      <br/>
      <br/>
      <form action="" onSubmit={handleSubmit}>

      {Dy_Form.map((ele,index)=>{
        return(
          <div key={index}>
            <input type="text" name="fname" value={ele.fname} placeholder="First name"/>
            <input type="text" name="lname" value={ele.lname} placeholder="First name"/>
                {index === Dy_Form.length - 1 ? (
                  <button onClick={addElement}>Add</button>
                ) : (
                  ''
                )}
                {index > 0 ? (
                  <button onClick={() => removeElement(index)}>Remove</button>
                ) : (
                  ''
                )}
          </div>
        )
      })}

      </form> 
    </div>
  );
}
