import axios from 'axios';

const loginUser = async ({ email, password }) => {
  try {
    await axios.post('http://localhost:5000/login', {
      email,
      password,
    });
  } catch (error) {
    console.error(error);
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
