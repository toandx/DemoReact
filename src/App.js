import React from 'react'
import {useState, useEffect} from 'react';

function App(props) {
  let [name, setName] = useState('toan');
  return(
    <div>
      <h1> Hello world {name}</h1>
    </div>
  );
}

export default App