import React from 'react';
import Logo from '../../img/logo-white.svg';
import HomeIcon from '../../img/icon-home.svg';
import style from './Login.module.css';
import { Link } from 'react-router-dom';

/* NAVBAR */
import Navbar from '../../components/navbar/Navbar';
/* ICONE DO NAVBAR */
import iconHome from '../../img/icon-home.svg';
const Login = () => {
  return (
    <div className={style.container}>
      {/*<Navbar/>*/}
      <Navbar
        buttons={[
          {
            route: '/',
            icon: iconHome,
            title: 'home',
            backgroundColor: ' #d842bd',
            textColor: '#ffff',
          },
        ]}
      />
      <div className={style.loginContainer}>
        <form className={style.loginForm}>
          <h3>Login</h3>
          <div className={style.usernameSection}>
            <input
              type="text"
              placeholder="Usuário"
              className={style.usernameInput}
            />
          </div>
          <div className={style.passwordSection}>
            <input
              type="password"
              placeholder="Senha"
              className={style.passwordInput}
            />
          </div>
          <button className={style.accessButton}>Acessar</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
