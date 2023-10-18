import { Avatar, Box, Button, ButtonGroup, Grid, Paper, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import CommentSection from './comment-section';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { createLike, deleteLike, fetchPosts } from '../../actions/post_actions';

const PostContainer = ({ post }) => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const user_id = useSelector(state => state.users?.user?.id)
	const [showComments, setShowComments] = useState(false);
	const [isLiked, setIsLiked] = useState(false);

	useEffect(() => {
		for (let like of post.likes) {
			if (like.user_id === user_id) {
				setIsLiked(true)
			}
		}
	}, []);

	const timeAgo = (date) => {
		const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });
		return <span>{timeAgo.split(' ').slice(1, 3).map((ele, idx) => {
			return idx === 1 ? ele.slice(0, 1) : ele
		})}</span>;
	};


	const handleLike = () => {
		const like_info = {
			'post_id': post.id,
			'user_id': user_id,
		}

		if (isLiked === true) {
			dispatch(deleteLike(like_info))
		} else {
			dispatch(createLike(like_info))
		}
		setIsLiked(!isLiked);
	}


	const buttons = [
		<Button aria-label="favorite" size="large" sx={{ width: '100%' }} onClick={() => setShowComments(!showComments)}>
			<ChatBubbleOutlineIcon sx={{ marginRight: '.25rem' }} fontSize='medium' />
			{post.comments.length}
		</Button>,
		<Button aria-label="favorite" size="large" sx={{ width: '100%' }}>
			<RepeatIcon sx={{ marginRight: '.25rem' }} fontSize='medium' />
			0
		</Button>,
		<Button aria-label="favorite" size="large" sx={{ width: '100%' }} onClick={handleLike} >
			{isLiked ? 
				<FavoriteIcon sx={{ marginRight: '.25rem' }} fontSize='medium' ></FavoriteIcon> :
				<FavoriteBorderIcon sx={{ marginRight: '.25rem' }} fontSize='medium' />
			}
			{isLiked ? post.likes.length + 1 : post.likes.length}
		</Button>,
	];

	return (
		<Paper className='timeline-paper' elevation={6}>
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
			<ButtonGroup variant='text' size="large" aria-label="text button group" sx={{ width: '100%', marginTop: '2rem', marginBottom: '.5rem', color: theme.palette.primary.light}}>
				{buttons}
			</ButtonGroup>
			{showComments && <CommentSection comments={post.comments} post_id={post.id} />}
		</Paper>
	)
}

export default PostContainer;