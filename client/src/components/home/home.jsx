import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Counter from './counter'
import Leagues from './leagues/leagues'
import Favorites from './favorites'
import MatchesTimeline from '../matches/matches-timeline';
import { Tab, Tabs, Typography, AppBar, Container, Grid } from '@mui/material';
import { css } from '@emotion/css'
import PostsTimeline from './posts-timeline';
import { fetchPosts } from '../../actions/post_actions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
	const dispatch = useDispatch();
	const posts = useSelector(state => state.posts);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [])

	return (
		<Container className='home-container'>
			<Grid container direction='row' justifyContent='space-between' alignItems='flex-start' spacing={3}>
				<Grid item sx={3}>
					Left col
				</Grid>
				<Grid item sx={6}>
					<PostsTimeline posts={posts} />
				</Grid>
				<Grid item sx={3}>
					Right col
				</Grid>
			</Grid>
		</Container>
	)
}

export default Home