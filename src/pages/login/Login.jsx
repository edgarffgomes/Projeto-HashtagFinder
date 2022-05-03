import React from "react";
import Logo from "../../img/logo-white.svg"
import HomeIcon from "../../img/icon-home.svg"
import style from "./Login.module.css"
//impor Navbar from ../../componentes/navbar
const Login = ()=>{

	return(
		<div className={style.container}>
			{/*<Navbar/>*/}
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
				</form>
			</div>
		</div>
	)
}
export default Login;
