import './home_templates/home.scss'
import React, { useState, useEffect } from 'react';
import { Link, Outlet, Route, Routes, useLocation, useNavigate, useRoutes, withRouter } from 'react-router-dom'
import Counter from './counter'
import Explore from './explore'
import MatchesTimeline from '../matches/matches-timeline';
import { Tab, Tabs, Typography, AppBar, Container, Grid } from '@mui/material';
import { css } from '@emotion/css'
import { fetchPosts, fetchReposts } from '../../actions/post_actions';
import { useDispatch, useSelector } from 'react-redux';
import PostsColumn from './posts-column';
import HomeFixturesColumn from './home-fixtures-column';
import HomeMenu from './home-menu';
import HomeNews from './home-news';
import Notifications from './home-notifications';
import ProtectedRoute from '../util/route_util';

const Home = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedTab, setSelectedTab] = useState(0);
	const [selectedPost, setSelectedPost] = useState(0);
	const [component, setComponent] = useState();

	const routes = useRoutes([
		{ path: '/', element: <PostsColumn /> },
		{ path: 'notifications', element: <Notifications /> },
		{ path: 'matches', element: <MatchesTimeline /> },
		{ path: 'explore', element: <Explore /> },
		{ path: 'news', element: <HomeNews /> },
	]);

	const handleTabSelect = (value, location) => {
		setSelectedTab(value);
		navigate(`/${location}`)
	}

	return (
		<Container className='home-container' sx={{paddingBottom: '5rem'}}>
			<Grid container alignItems='flex-start' spacing={1}>
				<Grid item xs={3} sx={{position: 'sticky', top: '2rem'}}>
					<HomeMenu selectedTab={selectedTab} handleTabSelect={handleTabSelect}/>
				</Grid>
				<Grid item>
					<Outlet/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Home;