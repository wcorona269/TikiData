import './home.scss';
import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Counter from './counter'
import Leagues from './leagues/leagues'
import MatchesTimeline from '../matches/matches-timeline';
import { Tab, Tabs, Typography, AppBar, Container, Grid } from '@mui/material';
import { css } from '@emotion/css'
import { fetchPosts } from '../../actions/post_actions';
import { useDispatch, useSelector } from 'react-redux';
import PostsColumn from './posts-column';
import HomeFixturesColumn from './home-fixtures-column';
import HomeMenu from './home-menu';

const Home = () => {
	const dispatch = useDispatch();
	const posts = useSelector(state => state.posts);

	useEffect(() => {dispatch(fetchPosts())}, [])
	useEffect(() => {}, [posts])

	const [selectedTab, setSelectedTab] = useState(0);

	let tabs = [
		<PostsColumn posts={posts} />
	]

	const handleTabSelect = (value) => {
		setSelectedTab(value)
	}

	return (
		<Container className='home-container'>
			<Grid container alignItems='flex-start' spacing={1}>
				<Grid item xs={3} sx={{position: 'sticky', top: '2rem'}}>
					<HomeMenu selectedTab={selectedTab} handleTabSelect={handleTabSelect}/>
				</Grid>
				<Grid item xs={6}>
					{tabs[selectedTab]}
				</Grid>
				<Grid item xs={3} sx={{ position: 'sticky', top: '2rem' }}>
					<HomeFixturesColumn/>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Home;