import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';
import { loginUser } from '../services/tasksAPI';

function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });

  const handleChange = ({ target: { name, value } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleClick = async () => {
    await loginUser(login);
  };

  return (
    <>
      <p>Tela de Login</p>
      <div id="login-form">
        <input type="text" placeholder="email" name="email" onChange={handleChange} />
        <input type="password" placeholder="senha" name="password" onChange={handleChange} />
        <button type="submit" onClick={handleClick}>Entrar</button>
      </div>
      <div id="create-new-user">
        <p>
          Caso queira criar um novo usuário clique
          <Link to="/create-user">aqui</Link>
        </p>
      </div>
    </>
  );
}

Login.propTypes = {
  history: object,
}.isRequired;

export default Login;
