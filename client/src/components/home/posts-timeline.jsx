import React from 'react'
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Box, Container, Grid, ListItem, Paper, Typography } from '@mui/material'

const PostsTimeline = ({posts}) => {
	console.log(posts)

	const timeAgo = ({ date }) => {
		const timeAgo = formatDistanceToNow(new Date(date), { addSuffix: true });
		return <span>{timeAgo}</span>;
	};

	const displayPosts = (posts) => {
		let result = [];

		for (let post of posts) {
			result.push(
				<Box sx={{border: '1px solid var(--darkgray)', padding: '1rem'}}>
					<Link>
						<Typography variant='body1' sx={{marginBottom: '.25rem'}}>
							{post.username}
						</Typography>
					</Link>
					<Typography variant='body1'>
						{post.text}
					</Typography>
					<Typography variant='caption'>
						{/* {timeAgo(post.created_at)} */}
					</Typography>
				</Box>
			)
		}

		return result;
	}

	return (
		<Paper className='home-paper'>
			<Box>
				{/* {displayPosts(posts.posts)} */}
			</Box>
		</Paper>
	)
}

export default PostsTimeline
