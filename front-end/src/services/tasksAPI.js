import axios from 'axios';

const loginUser = async ({ email, password }) => {
  try {
    const user = await axios.post('http://localhost:5000/login', {
      email,
      password,
    });
    return user.data;
  } catch (error) {
    return error;
  }
};

const userTasksFetch = async (id) => {
  try {
    const tasks = await axios.get(`http://localhost:5000/user/${id}`);

    return tasks.data;
  } catch (error) {
    return error;
  }
};

const createNewTask = async (taskName, description, statusTask, token) => {
  try {
    const task = await axios.post('http://localhost:5000/task',
      {
        taskName,
        description,
        statusTask,
      },
      { headers: { Authorization: token } });

    return task;
  } catch (error) {
    return error;
  }
};

const deleteTask = async (id, token) => {
  try {
    const task = await axios.delete(`http://localhost:5000/task/${id}`, { headers: { Authorization: token } });
    return task;
  } catch (error) {
    return error;
  }
};

export {
  loginUser,
  userTasksFetch,
  createNewTask,
  deleteTask,
};

// Consegui fazer funcionar apenas depois de entender as ordens de parâmetros do Axios,
// com ajuda desse link https://stackoverflow.com/questions/40988238/sending-the-bearer-token-with-axios
