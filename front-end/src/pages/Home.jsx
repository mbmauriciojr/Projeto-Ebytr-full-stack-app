import React, { useContext, useEffect, useState } from 'react';
import { object } from 'prop-types';
import { userTasksFetch, createNewTask } from '../services/tasksAPI';
import ContextTasks from '../provider/ContextTasks';

function Home() {
  const { user } = useContext(ContextTasks);
  const { _id: id } = user;
  const { token } = user;

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { taskName, description, statusTask } = event.target;

    await createNewTask(taskName.value, description.value, statusTask.value, token);

    fetchTasks(id);
  };

  return (
    <>
      <h1>{user.displayName}</h1>
      <div className="tasks-user">
        <ul className="tasks-list">
          { tasks.length === 0 ? null : createTasks() }
        </ul>

        <h3>Adicionar uma nova tarefa</h3>

        <form onSubmit={handleSubmit}>
          <input type="text" name="taskName" placeholder="Nome da tarefa" />
          <input type="text" name="description" placeholder="Descrição da tarefa" />

          <select name="statusTask">
            <option value="Feito">Feito</option>
            <option value="Em desenvolvimento">Em desenvolvimento</option>
            <option value="A fazer">A fazer</option>
          </select>

          <button type="submit">Criar</button>
        </form>

      </div>
    </>
  );
}

Home.propTypes = {
  history: object,
}.isRequired;

export default Home;
