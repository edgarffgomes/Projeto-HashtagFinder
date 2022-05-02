import React from "react";
import Logo from "../../img/logo-white.svg"
import HomeIcon from "../../img/icon-home.svg"
<<<<<<< HEAD
import style from "./Login.module.css"
const Login = ()=>{

	return(
		<div className={style.container}>
			<header className={style.head}>
				<img className={style.logo} src={Logo}/>
				<button className={style.homeButton}><img src={HomeIcon}/>home</button>
			</header>
			<div className={style.loginContainer}>		
				<form className={style.loginForm}>
					<h3>Login</h3>
					<div className={style.usernameSection}>
						<input type="text" placeholder="Usuário"  className={style.usernameInput}/>
					</div>
					<div className={style.passwordSection}>
						
						<input type="password" placeholder="Senha" className={style.passwordInput}/>
					</div>
					<button className={style.accessButton}>Acessar</button>
=======


/* Analisei o codigo de maneira geral dando uma passada aqui na sua parte 
vi que o seu codigo está afetando autras paginas por exemplo
a pagina home  do alexandre isso por conta do seu css ter classes com nome iguais.
Para evitar esse tipo de problema e resolver você terá que criar o css por module att joao..

Quando puxei o seu código já fiz a rota no main root 

*/

// Deixei comentado caso você queira observar..

// import"./Login.css"

const Login = ()=>{

	return(
		<div className="container">
			<header>
				<img className="logo" src={Logo} />
				<button className="homeButton"><img src={HomeIcon}/>home</button>
			</header>
			<div className="loginContainer">		
				<form className="loginForm">
					<h3>Login</h3>
					<div className="usernameSection">
						<label className="usernameLabel" htmlFor="username">Usuário</label>
						<input type="text" name="username" className="usernameInput"/>
					</div>
					<div className="passwordSection">
						<label className="passwordLabel" htmlFor="password">Senha</label>
						<input type="password" name="password" className="passwordInput"/>
					</div>
					<button className="accessButton">Acessar</button>
>>>>>>> main
				</form>
			</div>
		</div>
		)
}
export default Login;