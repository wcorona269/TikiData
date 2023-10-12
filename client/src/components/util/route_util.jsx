import React, { useEffect, useState }from 'react'
import { BrowserRouter as Router, Route, Navigate, redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { fetchCurrentUser } from '../../actions/user_actions';

const ProtectedRoute = ({ component, ...rest }) => {
	const dispatch = useDispatch();
	const username = useSelector(state => state.users.user?.username ?? null);
	
	useEffect(() => {
		dispatch(fetchCurrentUser())
	}, [])

	useEffect(() => {
	}, [username])


	return username !== null ? (
		[component]
	) : (
		<Navigate to="/welcome" />
	);
}

export default ProtectedRoute;