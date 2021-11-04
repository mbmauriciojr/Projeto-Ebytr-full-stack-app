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

    console.log(tasks.data);
    return tasks.data;
  } catch (error) {
    return console.error(error);
  }
};

export {
  loginUser,
  userTasksFetch,
};
