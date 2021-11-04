import axios from 'axios';

const loginUser = async ({ email, password }) => {
  try {
    const user = await axios.post('http://localhost:5000/login', {
      email,
      password,
    });
    return user.data;
  } catch (error) {
    return console.error(error);
  }
};

const teste = () => {
  const a = 51;
  return a;
};

export {
  loginUser,
  teste,
};
