import { Avatar, Box, Button, ButtonGroup, Grid, Paper, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import CommentSection from './comment-section';
import { useTheme } from '@mui/material/styles';

const PostContainer = ({ post }) => {
	const theme = useTheme();
	const [showComments, setShowComments] = useState(false);


	const timeAgo = (date) => {
		const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });
		return <span>{timeAgo.split(' ').slice(1, 3).map((ele, idx) => {
			return idx === 1 ? ele.slice(0, 1) : ele
		})}</span>;
	};


	const buttons = [
		<Button aria-label="favorite" size="large" sx={{ width: '100%' }} onClick={() => setShowComments(!showComments)}>
			<ChatBubbleOutlineIcon sx={{ marginRight: '.25rem' }} fontSize='medium' />
			{post.comments.length}
		</Button>,
		<Button aria-label="favorite" size="large" sx={{ width: '100%' }}>
			<RepeatIcon sx={{ marginRight: '.25rem' }} fontSize='medium' />
			0
		</Button>,
		<Button aria-label="favorite" size="large" sx={{ width: '100%' }}>
			<FavoriteBorderIcon sx={{ marginRight: '.25rem' }} fontSize='medium' />
			{post.likes.length}
		</Button>,
	];

	return (
		<Paper className='timeline-paper' elevation={3}>
			<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
				<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'top' }}>
					<Avatar sx={{ marginRight: '.5rem' }} />
					<Grid
						container
						direction="column"
						justifyContent="center"
						alignItems='flex-start'
					>
						<Grid item sx={6}>
							<Typography variant='body1' sx={{ fontFamily: theme.typography.bold }}>
								{post.username}
							</Typography>
						</Grid>
						<Grid item sx={6}>
							<Typography variant='caption' sx={{ color: 'var(--darkgray)' }}>
								{timeAgo(post.created_at)}
							</Typography>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Typography variant='body1'>
				{post.text}
			</Typography>
			<ButtonGroup variant='text' size="large" aria-label="text button group" sx={{ width: '100%', marginTop: '2rem', marginBottom: '.5rem'}}>
				{buttons}
			</ButtonGroup>
			{showComments && <CommentSection comments={post.comments} post_id={post.id} />}
		</Paper>
	)
}

export default PostContainer;