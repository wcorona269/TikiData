import React, { useEffect }from 'react'
import { useNavigate } from 'react-router-dom';
import Home from '../home/home';

const ProtectedRoute = ({ currentUser }) => {
	const navigate = useNavigate();	
	const isAuthenticated = currentUser !== null;

	if (isAuthenticated) {
		return <Home />;
	} else {
		navigate('/welcome');
		return null;
	}
};

export default ProtectedRoute;