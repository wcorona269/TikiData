import { Avatar, Box, IconButton, TextField, Typography } from '@mui/material';
import React from 'react'

import CreateComment from './create-comment';
import CommentContainer from './comment-container';

const CommentSection = ({ comments, post_id }) => {

	return (
		<Box className='post-comment-section' sx={{ marginTop: '1rem' }}>
			<CreateComment post_id={post_id} />
			{comments.map((comment, idx) => {
				return (
					<CommentContainer comment={comment} key={idx}/>
				)
			})}
		</Box>
	)
}

export default CommentSection;