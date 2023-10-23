import './home.scss';
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
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
import HomeNotifications from './home-notifications';

const Home = () => {
	const dispatch = useDispatch();
	const [selectedTab, setSelectedTab] = useState(0);
	const [selectedPost, setSelectedPost] = useState(0);

	let tabs = [
		<PostsColumn />,
		<HomeNotifications/>,
		<MatchesTimeline/>,
		<Explore/>,
		<HomeNews/>
	];

	const handleTabSelect = (value) => {
		setSelectedTab(value)
	}

	return (
		<Container className='home-container' sx={{paddingBottom: '5rem'}}>
			<Grid container alignItems='flex-start' spacing={1}>
				<Grid item xs={3} sx={{position: 'sticky', top: '2rem'}}>
					<HomeMenu selectedTab={selectedTab} handleTabSelect={handleTabSelect}/>
				</Grid>
				{
					selectedTab < 2 || selectedTab > 3  ? 
					[<Grid item xs={6}>
						{tabs[selectedTab]}
					</Grid>,
					<Grid item xs={3} sx={{ position: 'sticky', top: '2rem' }}>
						<HomeFixturesColumn/>
					</Grid>] :
					<Grid item xs={9}>
						{tabs[selectedTab]}
					</Grid>
				}
			</Grid>
		</Container>
	)
}

export default Home;