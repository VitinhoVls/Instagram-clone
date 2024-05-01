
import './App.css';
import {db}from './firebase.js';
import React, {useEffect, useState} from 'react';
import instagram from '../src/instagram-logo.png';
import Header from './Header';

function App() {
  const [user, setUser] = useState(null);


useEffect(()=>{
  
},[])



  return (
    <div className="App">
  
      <Header user={user} setUser={setUser}></Header>
    </div>
  );
}

export default App;
