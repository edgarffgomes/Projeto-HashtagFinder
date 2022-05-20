import { Navigate} from 'react-router-dom';
import { useAuth } from './Auth';
export const CheckLogin = ({ children }) =>{
	const auth = useAuth();
	
	if(auth.isLogged){
		return <Navigate to='/search'/>
	}

	return children;
}