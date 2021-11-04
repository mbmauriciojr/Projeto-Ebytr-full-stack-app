import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProviderTasks from './provider/ProviderTasks';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProviderTasks>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </ProviderTasks>
    </div>
  );
}

export default App;
