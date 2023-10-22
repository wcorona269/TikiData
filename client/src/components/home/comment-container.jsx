import { Avatar, Box, ButtonGroup, IconButton, Paper, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { useTheme } from '@mui/material/styles';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createLike, deleteLike, fetchPosts } from '../../actions/post_actions';
import { createNotification } from '../../actions/notification_actions';

const CommentContainer = ({ comment }) => {
	const dispatch = useDispatch()
	const [isLiked, setIsLiked] = useState(0)
	const user_id = useSelector(state => state.users.user.id);
	const username = useSelector(state => state.users?.user?.username);
	const theme = useTheme();

	useEffect(() => {
		dispatch(fetchPosts())
	}, [isLiked])

	useEffect(() => {
		for (let like of comment.likes) {
			if (like.user_id === user_id)	{
				setIsLiked(true)
			}
		}
	}, [])
	
	const handleLike = () => {
		const like_info = {
			'user_id': user_id,
			'comment_id': comment.id
		}
		const notif_info = {
			'recipient_id': comment.user_id,
			'sender_id': user_id,
			'message': `${username} liked your comment`,
			'post_id': comment.post_id
		}
		if (isLiked === true) {
			dispatch(deleteLike(like_info))
		} else {
			dispatch(createLike(like_info))
			dispatch(createNotification(notif_info))
		}
		setIsLiked(!isLiked)
	}

	return (
		<Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '.5rem' }}>
			<Avatar />
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '.5rem' }}>
				<Paper onDoubleClick={() => handleLike()} elevation={10} sx={{ padding: '.5rem', borderRadius: '.5rem', minWidth: '10rem' }} >
					<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start'}}>
						<Typography variant='body2' sx={{ marginBottom: '.5rem', fontFamily: theme.typography.bold }}>
							{comment.username}
						</Typography>
						<IconButton aria-label="favorite" size="small" onClick={() => handleLike()} sx={{padding: '0px', color: theme.palette.primary.light}}>
							{ isLiked ?
								<FavoriteIcon fontSize='small' /> :
								<FavoriteBorderIcon fontSize='small' />
							}
						</IconButton>
					</Box>
					<Typography variant='body2'>
						{comment.text}
					</Typography>
				</Paper>
			</Box>
		</Box>
	)
}

export default CommentContainer
