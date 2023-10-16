import './posts-column.scss'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Avatar, Box, Button, ButtonGroup, Container, Grid, IconButton, ListItem, Paper, TextField, Typography, useTheme } from '@mui/material'
import LoadingMessage from '../util/loading/loading-screen';
import CreatePost from './create-post';
import PostContainer from './post-container';


const PostsColumn = ({posts}) => {
	const theme = useTheme();

	if (!posts.posts) {
		return <LoadingMessage/>
	}

	return (
		<Box>
			<Typography className='section-heading' variant='h5'>
				home
			</Typography>
			<CreatePost/>
			{posts.posts.map((post, idx) => (
				<PostContainer post={post} />
			))}
		</Box>
	)
}

export default PostsColumn;
