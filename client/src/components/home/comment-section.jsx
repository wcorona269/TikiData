import { Avatar, Box, IconButton, TextField, Typography } from '@mui/material';
import React from 'react'

import { useTheme } from '@mui/material/styles';
import CreateComment from './create-comment';
import CommentContainer from './comment-container';

const CommentSection = ({ comments }) => {
	const theme = useTheme();

	return (
		<Box className='post-comment-section' sx={{ marginTop: '1rem' }}>
			<CreateComment/>
			{comments.map((comment, idx) => {
				return (
					<CommentContainer comment={comment}/>
				)
			})}
		</Box>
	)
}

export default CommentSection;