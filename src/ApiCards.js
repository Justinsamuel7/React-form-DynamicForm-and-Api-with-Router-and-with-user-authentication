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
    setLayout({card:true , address:false});

  }

  async function addressfetch(index,address)
  {
    let Initialreq = await fetch("https://jsonplaceholder.typicode.com/users");
    let Finalreq = await Initialreq.json();
    setAddress(Finalreq[index].address);
    setLayout({card:false , address:true});
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
          <div key ={index} class="card" onClick={()=>addressfetch(index,ele.address)}>
            <p>{ele.username}</p>
            <p>{ele.email}</p>
            <p>{ele.phone}</p>
          </div>
          </div>
        )
      })}
      </> : ''}

      {Layout.address? <>
      <div>
        <p>Address</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <button onClick={ApiRequest}>Back</button>

      </div>
      </> : ''}
    </div>
  );
}
