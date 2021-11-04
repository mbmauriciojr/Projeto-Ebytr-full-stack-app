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
    return console.error(error);
  }
};

const createTask = async (taskName, description, statusTask) => {
  try {
    await axios.get('http://localhost:5000/task', {
      taskName,
      description,
      statusTask,
    });
  } catch (error) {
    console.error(error);
  }
};

export {
  loginUser,
  userTasksFetch,
  createTask,
};
