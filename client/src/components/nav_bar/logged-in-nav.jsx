import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { Tab, Tabs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SportsIcon from '@mui/icons-material/Sports';
import ExploreIcon from '@mui/icons-material/Explore';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const LoggedInNav = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const username = useSelector(state => state.users?.user?.username ?? null);

	const handleClick = () => { 
		dispatch(logoutUser())
	}

	let [selectedTab, setSelectedTab] = useState(0);

	const handleChange = (value) => {
		setSelectedTab(value);

		switch (value) {
			case 0:
				navigate('/home')
				break;
			case 1:
				navigate('/news')
				break;
			case 2:
				navigate('/matches')
				break;
			case 3:
				navigate('/explore')
				break;
		}
	}
	
	return (
		<Tabs value={selectedTab} >
			<Tab
				onClick={() => handleChange(0)}
				icon={<HomeIcon />}
				aria-label="home"
			/>
			<Tab
				onClick={() => handleChange(1)}
				icon={<NewspaperIcon />}
				aria-label="home"
			/>
			<Tab
				onClick={() => handleChange(2)}
				icon={<SportsIcon />}
				aria-label="home"
			/>
			<Tab
				onClick={() => handleChange(3)}
				icon={<ExploreIcon />}
				aria-label="home"
			/>
		</Tabs>
	)
}

export default LoggedInNav;