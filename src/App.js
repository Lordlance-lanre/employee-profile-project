import React from 'react';
// import { useState, useEffect } from "react";
import Dashboard from './components/Dashboard/Dashboard.js';
import Profile from './components/Profile/Profile.js';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="container">
     <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/profile/:id" element={<Profile/>}/>
     </Routes>
    </div>
  );
}

export default App;
