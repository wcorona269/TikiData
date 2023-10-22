import { Avatar, Box, Button, ButtonGroup, Grid, Link, Paper, Typography } from '@mui/material'
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
import { createNotification, deleteNotification } from '../../actions/notification_actions';
import { useNavigate } from 'react-router-dom';

const PostContainer = ({ post }) => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const user_id = useSelector(state => state.users?.user?.id)
	const username = useSelector(state => state.users?.user?.username)
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

		const notif_info = {
			'recipient_id': post.user_id,
			'sender_id': user_id,
			'message': `${username} liked your post`,
			'post_id': post.id
		}

		if (isLiked === true) {
			dispatch(deleteLike(like_info))
		} else {
			dispatch(createLike(like_info))
			dispatch(createNotification(notif_info))
		}
		setIsLiked(!isLiked);
	}

	// const handleRepost = () => {
	// 	const repost_info = {
	// 		'post_id': post.id,
	// 		'user_id': user_id,
	// 	}

	// 	const notif_info = {
	// 		'recipient_id': post.user_id,
	// 		'sender_id': user_id,
	// 		'message': `${username} reposted your post`,
	// 		'post_id': post.id
	// 	}

	// 	if (isLiked === true) {
			
	// 	} else {
	// 		dispatch(createLike(like_info))
	// 		dispatch(createNotification(notif_info))
	// 	}
	// 	setIsLiked(!isLiked);
	// }


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
		<Paper className='timeline-paper' elevation={2}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
				<Avatar sx={{ marginRight: '.5rem' }} />
				<Box sx={{ display: 'flex', flexDirection: 'column'}}>
					<Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '.5rem'}}>
						<Typography variant='body1' sx={{ fontFamily: theme.typography.bold }}>
							<Link underline='hover'>
								{post.username}
							</Link>
						</Typography>
						<Typography variant='caption' sx={{ color: 'var(--darkgray)' }}>
							{timeAgo(post.created_at)}
						</Typography>
					</Box>
					<Typography variant='body1'>
						{post.text}
					</Typography>
				</Box>
			</Box>
			<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '.5rem'}}>
				{buttons}
			</Box>
			{showComments && <CommentSection comments={post.comments} post={post} />}
		</Paper>
	)
}

export default PostContainer;