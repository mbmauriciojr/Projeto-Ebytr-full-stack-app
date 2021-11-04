import React from 'react';
import { Link } from 'react-router-dom';
import { object } from 'prop-types';

function Login() {
  return (
    <>
      <p>Tela de Login</p>
      <div id="login-form">
        <input type="text" placeholder="email" name="email" />
        <input type="text" placeholder="senha" name="password" />
        <button type="submit">Entrar</button>
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
