import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ProviderTasks from './provider/ProviderTasks';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProviderTasks>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/teste" element={(<div>Olá</div>)} />
        </Routes>
      </ProviderTasks>
    </div>
  );
}

export default App;
