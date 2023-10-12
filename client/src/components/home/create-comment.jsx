import { Avatar, Box, Button, Container, IconButton, TextField, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

const CreateComment = ({ post_id, parent_id }) => {
	const theme = useTheme()
	const [comment, setComment] = useState('');

	const [isValid, setIsValid] = useState(false);

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
				<IconButton variant='contained' size='small' sx={{ bgcolor: isValid ? 'var(--green)' : 'white', color: isValid ? 'white' : 'var(--green)', borderRadius: '.5rem', marginLeft: '.5rem', height: '2rem', fontFamily: 'Ubuntu-Bold', marginTop: '.5rem'}}>
					<SendIcon/>
				</IconButton>
			</Box>
		</>
	)
}

export default CreateComment;