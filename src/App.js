import React,{useState} from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from "./Home"
import Career from "./Career"
import About from "./About"


let usernamepass_details=[
  {
    username:'justin',
    password:'123'
  },
  {
    username:'ronaldo',
    password:'456'
  },
  {
    username:'fede',
    password:'789'
  }
]




export default function App() {

  let [isLogin, setIsLogin] = useState(false);


  function Loginpage(){
    return (
      <div>
        <h1>Log into Just_IN</h1>
      <br />
      <input type="text" placeholder="Username" id="usernameinp" />
      <br />
      <br />
      <input type="password" placeholder="Password" id="passwordinp" />
      <br />
      <br />
      <button onClick={Checking}>login</button>
      <br />
      <br/>
      <div id="failedlog"> </div>
      </div>
    );
  
  }

  function Homepage (){

    return(
      <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/About" element={<About />} />
      </Routes>
      </div>
    )


  }

  function Checking(){
    let uninp = document.getElementById('usernameinp').value
    let passinp = document.getElementById('passwordinp').value
  
    let tempind=usernamepass_details.findIndex((element)=>element['username'] == uninp);
  
    
    if(tempind > -1){
      
      if(usernamepass_details[tempind]['username']===uninp && usernamepass_details[tempind]['password']===passinp)
      {
        // alert("You are logged in")
        setIsLogin(true);
        
      }
      else
      {
        document.getElementById('failedlog').innerHTML=`<span>invalid password!</span>`
      }
      
    }
    else{
      document.getElementById('failedlog').innerHTML=`<span>invalid username!</span>`
    }
  }
  



  return (

   <> {isLogin ? Homepage() : Loginpage()}</>  
   );

}
