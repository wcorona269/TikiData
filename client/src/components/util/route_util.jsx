import React, { useEffect }from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component, currentUser }) => {
	const navigate = useNavigate();
	
	useEffect(() => {
	}, [currentUser])

	return currentUser !== null ? (
		[component] ) : ( navigate("/welcome") );
}

export default ProtectedRoute;