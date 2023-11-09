import './posts-column.scss'
import React, { useEffect, useState } from 'react'
import { Button, Grid, Paper, Stack, Typography, useTheme, CircularProgress } from '@mui/material'
import { fetchPosts, fetchReposts } from '../../actions/post_actions';
import LoadingMessage from '../util/loading/loading-screen';
import CreatePost from './create-post';
import PostContainer from './post-container';
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import { useDispatch, useSelector } from 'react-redux';
import HomeFixturesColumn from './home-fixtures-column';
import Title from '../util/section-heading';
import UserFavorites from './my-favorites';

const PostsTimeline = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const posts = useSelector(state => state.posts?.posts || []);
	const current_page = useSelector(state => state.posts?.current_page);
	const isPostsLoading = useSelector(state => state.posts.isLoading);
	const isRepostsLoading = useSelector(state => state.reposts.isLoading);
	const reposts = useSelector(state => state.reposts?.reposts || []);
	const [combinedPosts, setCombinedPosts] = useState();

	useEffect(() => {
		dispatch(fetchPosts())
		dispatch(fetchReposts())
	}, []);

	useEffect(() => {
		
	}, [])

	useEffect(() => {
		let result = [];

		let i = 0;
		let j = 0;

		while (i < posts.length && j < reposts.length) {
			if (i === j) {
				result.push(posts[i])
				i++
			} else {
				result.push(reposts[j])
				j++
			}
		}

		let remainingPosts = posts?.slice(i) || [];
		let remainingReposts = reposts?.slice(j) || [];
		result.push(...remainingPosts);
		result.push(...remainingReposts);

		setCombinedPosts(result);
	}, [posts, reposts]);

	const loadMorePosts = () => {
		dispatch(fetchPosts(current_page + 1));
		dispatch(fetchReposts(current_page + 1));
	};

	if (!combinedPosts) {
		return <LoadingMessage/>
	}

	return (
		<>
			<Grid item xs={6}>
				<Stack spacing={2}>
					<Paper elevation={1}>
						<Title variant='h5' content='Home'/>
						<CreatePost/>
					</Paper>
					{combinedPosts.map((item, idx) => {
						if (item.post) {
							return (
								<PostContainer repost={item} post={item.post} idx={idx} />
							) 
						} else {
							return (
								<PostContainer post={item} key={idx} />
							)
						}
					})}
					{
						!isPostsLoading && !isRepostsLoading ?
							<Button onClick={loadMorePosts} variant="outlined" sx={{ height: '3rem', width: '100%' }}>
								<Typography variant='subtitle1'>
									See More
								</Typography>
							</Button> :
							<Button variant="outlined" sx={{ height: '3rem', width: '100%' }} >
								<CircularProgress size='2rem' />
							</Button>
					}
				</Stack>
			</Grid>
			<Grid item xs={3} sx={{ position: 'sticky', top: '3rem' }}>
				<Stack spacing={2}>
					<HomeFixturesColumn/>
				</Stack>
			</Grid>
			<ScrollToTopOnLoad/>
		</>
	)
}

export default PostsTimeline;