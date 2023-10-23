import './posts-column.scss'
import React, { useEffect, useState } from 'react'
import { Paper, Typography, useTheme } from '@mui/material'
import { fetchPosts, fetchReposts } from '../../actions/post_actions';
import LoadingMessage from '../util/loading/loading-screen';
import CreatePost from './create-post';
import PostContainer from './post-container';
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import { useDispatch, useSelector } from 'react-redux';
import RepostContainer from './repost-container';


const PostsColumn = () => {
	const theme = useTheme();
	const dispatch = useDispatch();
	const posts = useSelector(state => state.posts?.posts || []);
	const reposts = useSelector(state => state.reposts?.reposts?.[0] || []);
	const [allPosts, setAllPosts] = useState();

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

		setAllPosts(result);
		console.log(allPosts)
	}, [posts, reposts])

	if (!allPosts) {
		return <LoadingMessage/>
	}

	return (
		<Paper elevation={2}>
			<Typography className='section-heading' variant='h5'>
				Home
			</Typography>
			<CreatePost/>
			{allPosts.map((item, idx) => {
				if (item.post) {
					return (
						<RepostContainer post={item} idx={idx} />
					) 
				} else {
					return (
						<PostContainer post={item} key={idx} />
					)
				}
			})}
			<ScrollToTopOnLoad/>
		</Paper>
	)
}

export default PostsColumn;