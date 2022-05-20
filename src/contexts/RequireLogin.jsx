import { Navigate} from 'react-router-dom';
import { useAuth } from './Auth';
export const RequireLogin = ({ children }) =>{
	const auth = useAuth();

	if(!auth.isLogged){
		return <Navigate to='/login'/>
	}

	return children;
}