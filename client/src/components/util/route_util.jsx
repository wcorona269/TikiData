import React, { useEffect, useState }from 'react'
import { BrowserRouter as Router, Route, Navigate, redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';

const ProtectedRoute = ({ component: Component, ...rest }) => {
	const dispatch = useDispatch();
	const token = useSelector(state => state.session.user?.access_token ?? null);

	useEffect(() => {
		if (token === null) {
			dispatch(logoutUser())
		} else {
			const decodedToken = jwt_decode(token);
			const tokenExpiration = decodedToken.exp ? decodedToken.exp : 0
			const isTokenExpired = (Date.now() / 1000) >= tokenExpiration;
			if (isTokenExpired === true) {
				dispatch(logoutUser())
			}
		}
	}, [])

	if (token === null) {
		return <Navigate to='/welcome' />
	}

	return <Component/>;
}

export default ProtectedRoute