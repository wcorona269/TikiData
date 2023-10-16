import React, { useEffect, useState }from 'react'
import { BrowserRouter as Router, Route, Navigate, redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { fetchCurrentUser } from '../../actions/user_actions';

const ProtectedRoute = ({ component, currentUser }) => {
	useEffect(() => {
	}, [currentUser])

	return currentUser !== null ? (
		[component] ) : ( <Navigate to="/welcome" /> );
}

export default ProtectedRoute;