import { Avatar, Box, Button, Container, IconButton, TextField, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import { fetchPosts } from '../../actions/post_actions'

const CreateComment = ({ post_id, parent_id }) => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const [comment, setComment] = useState('');
	const [isValid, setIsValid] = useState(false);
	const userId = useSelector(state => state.users.user.id)

	const comment_data = {
		'user_id': userId,
		'post_id': post_id,
		'text': comment
	}

	useEffect(() => {
		if (comment.length > 0 && comment.length < 1000) {
			setIsValid(true)
		} else {
			setIsValid(false)
		}
	}, [comment])

	const handleChange = (event) => {
		setComment(event.target.value)
	}
	
	const handleSubmit = (comment_data) => {
		setComment('');
		dispatch(createComment(comment_data));
		dispatch(fetchPosts())
	}
 
	return (
		<>
			<Box sx={{display: 'flex', flexDirection: 'row', marginBottom: '1rem'}}>
				<Avatar sx={{marginRight: '.5rem'}}/>
				<TextField
					style={{ border: 'none', width: '100%', fontFamily: 'Ubuntu', borderRadius: '.5rem', paddingTop: '.5rem' }}
					placeholder="leave a comment..."
					variant="standard"
					id="outlined-multiline-flexible"
					multiline
					value={comment}
					onChange={handleChange}
					/>
				<IconButton variant='outlined' size='small' 
					onClick={() => handleSubmit(comment_data)}
					disabled={!isValid}
					sx={{ 
						color: theme.palette.primary.main,
						borderRadius: '.5rem', marginLeft: '.5rem',
						height: '2rem', fontFamily: 'Ubuntu-Bold',
						marginTop: '.5rem'
					}}>
					<SendIcon/>
				</IconButton>
			</Box>
		</>
	)
}

export default CreateComment;