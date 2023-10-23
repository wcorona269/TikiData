import './posts-column.scss'
import React, { useEffect } from 'react'
import { Paper, Typography, useTheme } from '@mui/material'
import { fetchPosts, fetchReposts } from '../../actions/post_actions';
import LoadingMessage from '../util/loading/loading-screen';
import CreatePost from './create-post';
import PostContainer from './post-container';
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import { useDispatch, useSelector } from 'react-redux';


const PostsColumn = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const posts = useSelector(state => state.posts?.posts || []);
	const reposts = useSelector(state => state.reposts?.reposts || []);
	console.log(reposts);

	useEffect(() => {
		dispatch(fetchPosts())
		dispatch(fetchReposts())
	}, [])

	if (!posts) {
		return <LoadingMessage/>
	}

	return (
		<Paper elevation={2}>
			<Typography className='section-heading' variant='h5'>
				Home
			</Typography>
			<CreatePost/>
			{posts.map((post, idx) => (
				<PostContainer post={post} key={idx} />
			))}
			<ScrollToTopOnLoad/>
		</Paper>
	)
}

export default PostsColumn;