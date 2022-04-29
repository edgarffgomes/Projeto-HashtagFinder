import React from "react";
import Logo from "../../img/logo-white.svg"
import HomeIcon from "../../img/icon-home.svg"
import"./Login.css"

const Login = ()=>{

	return(
		<div className="container">
			<header>
				<img className="logo" src={Logo}/>
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
				</form>
			</div>
		</div>
		)
}
export default Login;