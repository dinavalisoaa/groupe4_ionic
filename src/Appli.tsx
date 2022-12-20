import React, { useEffect, useState } from 'react';
// import { Button, ButtonGroup, Container, Table } from 'reactstrap';

import { Link } from 'react-router-dom';
import { groupEnd } from 'console';

const Appli = () => {

const [name, setData] = useState(null); 
const [id, setId] = useState(null); 
useEffect(() => { 
    fetch('http://localhost:8080/vehicules') 
    .then(response => response.json())
    .then(data =>  { 
alert(data.id)

     }) },[]);
    return ( <div className="App">
    <header className="App-header">
         <img 
         className="App-logo" alt="logo" />
          <p> Hello, TheCodeBuzz Community !  </p> <div className="card-body"> 
<p>Name: {name}</p> <p>Id: {id} </p> </div> </header> </div> 
);}
export default Appli;