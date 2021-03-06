import React, { useContext, useEffect, useState } from 'react';
import { object } from 'prop-types';
import { userTasksFetch, createNewTask, deleteTask } from '../services/tasksAPI';
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

  const deleteUserTask = async (event) => {
    const idTask = event.target.id;

    await deleteTask(idTask, token);

    fetchTasks(id);
  };

  const createTasks = () => (
    tasks.map((task) => {
      const { _id: idTask } = task;
      return (
        <li key={idTask}>
          {task.taskName}
          <button type="button" id={idTask} onClick={deleteUserTask}>
            Excluir
          </button>
        </li>
      );
    })
  );

  useEffect(() => {
    fetchTasks(id);
  }, []);

  const clearForm = () => {
    const form = document.getElementById('task-form');

    form.reset();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { taskName, description, statusTask } = event.target;

    await createNewTask(taskName.value, description.value, statusTask.value, token);

    fetchTasks(id);
    clearForm();
  };

  return (
    <>
      <h1>{user.displayName}</h1>
      <div className="tasks-user">
        <ul className="tasks-list">
          { tasks.length === 0 ? null : createTasks() }
        </ul>

        <h3>Adicionar uma nova tarefa</h3>

        <form id="task-form" onSubmit={handleSubmit}>
          <input type="text" name="taskName" placeholder="Nome da tarefa" />
          <input type="text" name="description" placeholder="Descrição da tarefa" />

          <select name="statusTask">
            <option value="Pronto">Pronto</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Pendente">Pendente</option>
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
