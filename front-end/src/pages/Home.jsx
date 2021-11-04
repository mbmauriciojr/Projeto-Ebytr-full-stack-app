import React, { useContext } from 'react';
import { object } from 'prop-types';
import ContextTasks from '../provider/ContextTasks';

function Home() {
  const { user } = useContext(ContextTasks);
  return (
    <>
      <h1>{user.email}</h1>
    </>
  );
}

Home.propTypes = {
  history: object,
}.isRequired;

export default Home;
