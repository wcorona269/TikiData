import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { Tab, Tabs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SportsIcon from '@mui/icons-material/Sports';
import ExploreIcon from '@mui/icons-material/Explore';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AccountMenu from './account-menu';

const LoggedInNav = ({ lightMode, setLightMode }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const username = useSelector(state => state.users?.user?.username ?? null);

	const handleClick = () => { 
		dispatch(logoutUser());
	}

	return (
		<AccountMenu lightMode={lightMode} setLightMode={setLightMode} handleClick={handleClick} />
	)
}

export default LoggedInNav;