import React,{useState,useEffect} from 'react';
import './style.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

export default function ApiCards() {
  let [Card, setCard] = useState([]);
  let [Address, setAddress] = useState({});
  let [Layout,setLayout] = useState({card:true , address:false});

  useEffect(() => {
    ApiRequest();
  }, []);

  async function ApiRequest()
  {
    let Initialreq = await fetch("https://jsonplaceholder.typicode.com/users");
    let Finalreq = await Initialreq.json();
    setCard(Finalreq);
  }

  async function addressfetch(id)
  {
    let Initialreq = await fetch("https://jsonplaceholder.typicode.com/users");
    let Finalreq = await Initialreq.json();
    setCard(Finalreq);
  }




  return (
    <div>
      <h1>This is Career page</h1>
      <Link to="/">Home</Link>
      <br/>
      <br/>
      {Layout.card? <>
      {Card.map((ele,index)=>{
        return(
          <div id="cardscont">
          <div key ={index} class="card" onClick={()=>addressfetch(ele.id)}>
            <p>{ele.username}</p>
            <p>{ele.email}</p>
            <p>{ele.phone}</p>
          </div>
          </div>
        )
      })}
      </> : ''}
    </div>
  );
}
