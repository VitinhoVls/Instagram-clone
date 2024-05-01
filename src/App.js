
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
  
<<<<<<< HEAD
      <Header user={user} setUser={setUser}></Header>
=======
      <Header user={user}></Header>
>>>>>>> a5c7c562d1ed56534f2f302266e493d3f5dfa4d9
    </div>
  );
}

export default App;
