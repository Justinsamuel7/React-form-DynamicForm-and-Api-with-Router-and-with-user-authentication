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

  function collectData(index,event)
  {
    let TempAllValues = [...Dy_Form]
    TempAllValues[index][event.target.name]=event.target.value
    setDy_Form(TempAllValues)

  }

  function handleSubmit(e)
  {
    e.preventDefault();
  }

  function addElement()
  {
    setDy_Form([...Dy_Form ,{fname : '',lname : ''}])
  }

  function removeElement(index)
  {
    let TempArr = [...Dy_Form];
    TempArr.splice(index,1);
    setDy_Form(TempArr);
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
            <input type="text" name="fname" value={ele.fname} placeholder="First name" onChange={(event)=>collectData(index,event)}/>
            <input type="text" name="lname" value={ele.lname} placeholder="First name" onChange={(event)=>collectData(index,event)}/>
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
                <br/>
                <br/>
                
          </div>
        )
      })}
      <button type="submit"></button>
      </form> 
      
    </div>
  );
}
