import './posts-column.scss'
import React, { useEffect, useState } from 'react'
import { Button, Grid, Paper, Stack, Typography, useTheme, CircularProgress } from '@mui/material'
import { fetchPosts, fetchReposts } from '../../actions/post_actions';
import LoadingMessage from '../util/loading/loading-screen';
import CreatePost from './create-post';
import PostContainer from './post-container';
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import { useDispatch, useSelector } from 'react-redux';
import RepostContainer from './repost-container';
import HomeFixturesComponent from '../league/home/league-home-fixtures';
import HomeFixturesColumn from './home-fixtures-column';
import SectionHeading from '../util/section-heading';

const PAGE_SIZE = 20;

const PostsTimeline = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const posts = useSelector(state => state.posts?.posts || []);
	const isLoading = useSelector(state => state.posts.isLoading);
	const current_page = useSelector(state => state.posts?.current_page)
	const reposts = useSelector(state => state.reposts?.reposts?.[0] || []);
	const [combinedPosts, setCombinedPosts] = useState();
	const [isLoadingMore, setIsLoadingMore] = useState(false)

	useEffect(() => {
		dispatch(fetchPosts())
		dispatch(fetchReposts())
	}, [])

	useEffect(() => {
		let result = [];

		let i = 0;
		let j = 0;

		while (i < posts.length && j < reposts.length) {
			if (posts[i].created_at > reposts[j].created_at) {
				result.push(posts[i])
				i++
			} else {
				result.push(reposts[j])
				j++
			}
		}

		let remainingPosts = posts.slice(i) || [];
		let remainingReposts = reposts?.slice(j) || [];
		result.push(...remainingPosts);
		result.push(...remainingReposts);

		setCombinedPosts(result);
	}, [posts, reposts]);

	const loadMorePosts = () => {
		setIsLoadingMore(true)
		dispatch(fetchPosts(current_page + 1));
		setTimeout(() => {
			setIsLoadingMore(false)
		}, 2000);
	};

	if (!combinedPosts) {
		return <LoadingMessage/>
	}

	return (
		<>
			<Grid item xs={6}>
				<Stack spacing={2}>
					<Paper elevation={1}>
						<SectionHeading variant='h5' content='Home'/>
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
						!isLoadingMore ?
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
			<Grid item xs>
				<HomeFixturesColumn/>
			</Grid>
			<ScrollToTopOnLoad/>
		</>
	)
}

export default PostsTimeline;