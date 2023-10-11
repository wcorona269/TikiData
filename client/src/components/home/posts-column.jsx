import './posts-column.scss'
import React from 'react'
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Box, Button, Container, Grid, ListItem, Paper, TextField, Typography } from '@mui/material'
import LoadingMessage from '../util/loading/loading-screen';
import CreatePost from './create-post';

const PostsColumn = ({posts}) => {

	if (!posts.posts) {
		return <LoadingMessage/>
	}

	const timeAgo = ({ date }) => {
		const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });
		return <span>{timeAgo}</span>;
	};

	const displayPosts = (posts) => {
		let result = [];

		for (let post of posts) {
			result.push(
				<Box sx={{border: '1px solid var(--darkgray)', padding: '1rem', width: '100%'}}>
					<Link>
						<Typography variant='body1' sx={{marginBottom: '.25rem'}}>
							{post.username}
						</Typography>
					</Link>
					<Typography variant='body1'>
						{post.text}
					</Typography>
					<Typography variant='caption'>
						{/* {timeAgo(post.created_at)} */}
					</Typography>
				</Box>
			)
		}

		return result;
	}

	return (
		<>
			<CreatePost/>
			<Paper className='home-paper'>
				<Box>
					{displayPosts(posts.posts)}
				</Box>
			</Paper>
		</>
	)
}

export default PostsColumn;
