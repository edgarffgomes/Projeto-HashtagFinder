import React, { useState} from 'react';
import { useAuth } from "../../contexts/Auth";
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
/* NAVBAR */
import Navbar from '../../components/navbar/Navbar';
/* ICONE DO NAVBAR */
import iconHome from '../../img/icon-home.svg';

const Login = ()=>{

  const [user, setUser] = useState('');

  const [password, setPassword] = useState('');

  const auth = useAuth();

  const navigate = useNavigate();

  




  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=8&view=Grid%20view&filterByFormula={Squad}=260422',
       {
        method: 'GET',
        headers: {
          Authorization: 'Bearer key2CwkHb0CKumjuM',
        },
      },
    ).then((response) => response.json())
        .then(function (database) {
          database.records.map((data)=>{
          if(data.fields.Email === user && data.fields.Senha === password){
            auth.login(true);
            navigate('/search', {replace: true});
          }
          return null
        })
        document.getElementById('messageError').innerHTML = 'Atenção! Seus dados são inválidos!'
      })
  }


  
   

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
        <form onSubmit={handleSubmit} className={style.loginForm}>
          <h3>Login</h3>
           {/*Seção de inserção do username/>*/}
          <div className={style.usernameSection}>
            <input
              type="email"
              placeholder="Usuário"
              className={style.usernameInput}
              onChange={(e) => setUser(e.target.value)}
              required
            />
          </div>
        {/*Seção de inserção da senha/>*/}
          <div className={style.passwordSection}>
            <input
              type="password"
              placeholder="Senha"
              className={style.passwordInput}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/*Botão de acesso/>*/}
          <button type="submit" className={style.accessButton}>Acessar</button>
          <span className="Error" id="messageError"></span>
        </form>
      </div>
    </div>
  )
}
export default Login;
