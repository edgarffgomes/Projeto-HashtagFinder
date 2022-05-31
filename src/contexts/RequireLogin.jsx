import { Navigate} from 'react-router-dom';
export const RequireLogin = ({ children }) =>{
	if(localStorage.getItem('Login') === null){
		return <Navigate to='/login'/>
	}

	return children;
}