import React, {useEffect, useState} from 'react';
import { useAuth } from "../../contexts/Auth";
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';
/* NAVBAR */
import Navbar from '../../components/navbar/Navbar';
/* ICONE DO NAVBAR */
import iconHome from '../../img/icon-home.svg';

const Login = ()=>{
  //array que receberá dados da API
  const apiData = [];

  //parâmetros para filtrar dados a serem recebidos pela APO
  const squad = "260422";

  const [user, setUser] = useState('');

  const [password, setPassword] = useState('');

  const auth = useAuth();

  const navigate = useNavigate();

  //useEffect para receber dados de login da API ao renderizar aplicação
  useEffect(() => async function getData() {
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'key2CwkHb0CKumjuM'}).base('app6wQWfM6eJngkD4');

    base('Login').select({
        // Selecionando os 8 primeiros registros da API
        maxRecords: 8,
        view: "Grid view"
    })
      // Esta função (`page`)será chamada para cada página de Records.
      .eachPage(function page(records, fetchNextPage) {
        

         records.forEach(function(record) {
            if(record.fields.Squad == squad){
              apiData.push(record.fields)
            }
        });

        // Para realizar fetch na próxima página de records, chame `fetchNextPage`.
        // Se há mais records, `page` será chamada novamente.
        // Se não há mais records, `done` será chamada.
        fetchNextPage();

    }, function done(err) {
        //Verificação de erros ao chamar API
        if (err) { console.error(err); return; }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }
  , [])


  const handleSubmit = () => {
    auth.login(true);
    navigate('/search', { replace: true })
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
