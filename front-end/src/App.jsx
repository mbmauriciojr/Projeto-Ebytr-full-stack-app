import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/teste" element={(<div>Olá</div>)} />
      </Routes>
    </div>
  );
}

export default App;
