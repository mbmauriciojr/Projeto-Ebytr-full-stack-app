import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ProviderTasks from './provider/ProviderTasks';
import Login from './pages/Login';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProviderTasks>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Login} />
        </Switch>
      </ProviderTasks>
    </div>
  );
}

export default App;
