import React , {useState}from 'react';
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

  let [DetailsArr, setDetailsArr] = useState([])
  let [ErrorOccured, setErrorOccured] = useState(false)


  function CollectInputs(e)
  {
    // console.log(e.target.value)
    let key=e.target.name
    setFormTemplate({...FormTemplate,[key]:e.target.value})
  }

  function submit(e)
  {
    e.preventDefault();
    setDetailsArr([...DetailsArr , {...FormTemplate , uniqueKey: new Date().getMilliseconds()}])
    // ErrorCheck()
    setFormTemplate(({
      name: '',
      age: '',
      gender: '',
      phnumber: '',
      mail: '',
      dept: ''
    }))

  }

  // function ErrorCheck()
  // {


  //   DetailsArr.map((ele)=>{

  //     if(ele.name=='' ||  ){

  //       setErrorOccured(true)
  //     }
  //     else
  //     {
  //       setErrorOccured(false)
  //     }
  //   })


  // }

  return (
    <div>
      <br/>
      <br/>
      <Link to="/">Home</Link>
      <br/>
      <br/>
      <h2>Form Page</h2>
      <form action="" onSubmit={submit}>
      <input type="text" name="name" placeholder="Name" value={FormTemplate.name} onChange={CollectInputs}/>
      <br/>
      <br/>
      <input type="number" name="age" placeholder="Age" value={FormTemplate.age} onChange={CollectInputs}/>
      <br/>
      <br/>
      <input type="text" name="gender" placeholder="Gender" value={FormTemplate.gender} onChange={CollectInputs}/>
      <br/>
      <br/>
      <input type="text" name="phnumber" placeholder="Contact Number" value={FormTemplate.phnumber} onChange={CollectInputs}/>
      <br/>
      <br/>
      <input type="mail" name="mail" placeholder="Mail ID" value={FormTemplate.mail} onChange={CollectInputs}/>
      <br/>
      <br/>
      <input type="text" name="dept" placeholder="Department" value={FormTemplate.dept} onChange={CollectInputs}/>
      <br/>
      <br/>
      <button type="submit">Submit</button>

      <br/>
      <br/>
      {ErrorOccured ? (<>error</>): (<>{DetailsArr.map((data)=>{
        return(
          <ul key={data.uniqueKey}>
          <li>{data.name}</li>
          <li>{data.age}</li>
          <li>{data.gender}</li>
          <li>{data.phnumber}</li>
          <li>{data.mail}</li>
          <li>{data.dept}</li>
          </ul>
        )
      })}</>)}

      <br/>
      <br/>



      </form>

    </div>
  );
}
