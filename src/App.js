import React from 'react'
import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Layout from './pages/layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Use Bootstrap in every where
function App(props) {
  let [name, setName] = useState('toan');
  return(
    <BrowserRouter>
      <Routes>
        {/* Add Layout to every page with URL /layout/... */}
        <Route path="/" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;