import './posts-column.scss'
import React from 'react'
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Avatar, Box, Button, Container, Grid, ListItem, Paper, TextField, Typography } from '@mui/material'
import LoadingMessage from '../util/loading/loading-screen';
import CreatePost from './create-post';

const PostsColumn = ({posts}) => {

	if (!posts.posts) {
		return <LoadingMessage/>
	}

	const timeAgo = (date) => {
		const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });
		return <span>{timeAgo}</span>;
	};

	const displayPosts = (posts) => {
		let result = [];
		
		for (let post of posts) {
			result.push(
				<Paper className='timeline-paper'>
					<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
						<Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'top'}}>
						<Avatar sx={{marginRight: '.5rem'}}/>
						<Typography variant='body1'>
							{post.username}
						</Typography>
						</Box>
						<Typography variant='caption' sx={{color: 'var(--darkgray)'}}>
							{timeAgo(post.created_at)}
						</Typography>
					</Box>
					<Typography variant='body1'>
						{post.text}
					</Typography>
					<Box className='post-comment-section' sx={{marginTop: '1rem'}}>
						<TextField
							sx={{width: '100%'}}
							variant='outlined'
							id="outlined-multiline-flexible"
							label="Leave a comment..."
							multiline
						/>
					</Box>
				</Paper>
			)
		}

		return result;
	}

	return (
		<>
			<CreatePost/>
			{displayPosts(posts.posts)}
		</>
	)
}

export default PostsColumn;
