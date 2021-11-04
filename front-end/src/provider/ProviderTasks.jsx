import React, { useState } from 'react';
import { object } from 'prop-types';

import ContextTasks from './ContextTasks';

function ProviderTasks({ children }) {
  const [token, setToken] = useState('');
  const [user, setUser] = useState('');

  const context = {
    token,
    user,
    setToken,
    setUser,
  };

  return (
    <ContextTasks.Provider value={context}>
      { children }
    </ContextTasks.Provider>
  );
}

ProviderTasks.propTypes = {
  children: object,
}.isRequired;

export default ProviderTasks;
