import { Avatar, Box, ButtonGroup, IconButton, Paper, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import { useTheme } from '@mui/material/styles';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

import React from 'react'

const CommentContainer = ({ comment }) => {
	const theme = useTheme();

	return (
		<Box sx={{ display: 'flex', flexDirection: 'row', marginTop: '.5rem' }}>
			<Avatar />
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '.5rem' }}>
				<Paper elevation={10} sx={{ padding: '.5rem', borderRadius: '.5rem' }}>
					<Typography variant='body2' sx={{ marginBottom: '.5rem', fontFamily: theme.typography.bold }}>
						{comment.username}
					</Typography>
					<Typography variant='body2'>
						{comment.text}
					</Typography>
				</Paper>
				<ButtonGroup>
					<IconButton aria-label="favorite" size="small">
						<ChatBubbleOutlineIcon fontSize='small' />
					</IconButton>
					<IconButton aria-label="favorite" size="small">
						<FavoriteBorderIcon fontSize='small' />
					</IconButton>
				</ButtonGroup>
			</Box>
		</Box>
	)
}

export default CommentContainer
