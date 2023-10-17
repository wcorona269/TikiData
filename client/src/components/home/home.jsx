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

const Home = () => {
	const dispatch = useDispatch();
	const posts = useSelector(state => state.posts);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [])

	useEffect(() => {
		
	}, [posts])

	return (
		<Container className='home-container'>
			<Grid container alignItems='flex-start' spacing={2}>
				<Grid item xs={3} sx={{overflow: 'auto'}}>
					<HomeFixturesColumn/>
				</Grid>
				<Grid item xs={6}>
					<PostsColumn posts={posts} />
				</Grid>
				<Grid item xs={3}>
					Right col
				</Grid>
			</Grid>
		</Container>
	)
}

export default Home;