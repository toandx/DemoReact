import React from 'react'
import {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Login from './pages/login';
import Layout from './pages/layout';
function App(props) {
  let [name, setName] = useState('toan');
  return(
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        {/* Add Layout to every page with URL /layout/... */}
        <Route path="/layout" element={<Layout />}> 
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;