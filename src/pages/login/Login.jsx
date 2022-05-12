import React from 'react';
import style from './Login.module.css';
/* NAVBAR */
import Navbar from '../../components/navbar/Navbar';
/* ICONE DO NAVBAR */
import iconHome from '../../img/icon-home.svg';


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
    {/*Container principal da div de login/>*/}
      <div className={style.loginContainer}>
        {/*Formulário de login/>*/}
        <form className={style.loginForm}>
          <h3>Login</h3>
           {/*Seção de inserção do username/>*/}
          <div className={style.usernameSection}>
            <input
              type="email"
              placeholder="Usuário"
              className={style.usernameInput}
            />
          </div>
        {/*Seção de inserção da senha/>*/}
          <div className={style.passwordSection}>
            <input
              type="password"
              placeholder="Senha"
              className={style.passwordInput}
            />
          </div>
          {/*Botão de acesso/>*/}
          <button type="submit" className={style.accessButton}>Acessar</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
