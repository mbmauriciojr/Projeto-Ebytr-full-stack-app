import React, { useContext, useEffect, useState } from 'react';
import { object } from 'prop-types';
import { userTasksFetch } from '../services/tasksAPI';
import ContextTasks from '../provider/ContextTasks';

function Home() {
  const { user } = useContext(ContextTasks);
  const { _id: id } = user;

  const [tasks, setTasks] = useState('');

  const fetchTasks = async (idUser) => {
    const userTasks = await userTasksFetch(idUser);

    setTasks(userTasks);
  };

  const createTasks = () => (
    tasks.map((task) => {
      const { _id: idTask } = task;
      return (<li key={idTask}>{task.taskName}</li>);
    })
  );

  useEffect(() => {
    fetchTasks(id);
  }, []);

  return (
    <>
      <h1>{user.displayName}</h1>
      <ul>
        { tasks.length === 0 ? null : createTasks() }
      </ul>
    </>
  );
}

Home.propTypes = {
  history: object,
}.isRequired;

export default Home;
