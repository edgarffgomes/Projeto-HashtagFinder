import {createContext, useContext, useState} from "react";
 
const AuthContext = createContext(null);



export  const AuthProvider = ({ children }) =>{
	const [isLogged, setIsLogged] = useState();


	const login  = (isLogged) => {
		localStorage.setItem('Login', true);
		setIsLogged(isLogged);
	}
	const logout = () => {
		localStorage.clear();
		setIsLogged(null);
	}

	return (
		<AuthContext.Provider value = {{isLogged, login, logout}}>
		 { children } 
		 </AuthContext.Provider>
	)
}

export  const useAuth = () =>{
	return useContext(AuthContext)
}