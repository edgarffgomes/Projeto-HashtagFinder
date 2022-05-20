import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null);

export  const AuthProvider = ({ children }) =>{
	const [isLogged, setIsLogged] = useState(null);

	const login  = (isLogged) => {
		setIsLogged(isLogged);
	}
	const logout = () => {
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