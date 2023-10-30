import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Paper, Box, Grid, Tabs, Tab, Container, Typography, Divider, useTheme, Skeleton } from '@mui/material';
import PostContainer from '../home/post-container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo } from '../../actions/user_actions';
import RepostContainer from '../home/repost-container';
import HomeFixturesColumn from '../home/home-fixtures-column';
import UserProfileHeader from './user-profile-header';

const UserProfile = () => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const { username } = useParams();
	const posts = useSelector(state => state.users.users?.user?.posts);
	const reposts = useSelector(state => state.users.users?.user?.reposts);
	const created_at = useSelector(state => state.users.users?.user?.created_at);
	const isLoading = useSelector(state => state.users.isLoading);

	const [selectedTab, setSelectedTab] = useState(0);
	
	useEffect(() => {dispatch(fetchUserInfo(username))}, [])

	const noPostsMessage = (
		<Container >
			<Typography textAlign='center' variant='h6' sx={{ color: theme.palette.text.disabled, padding: 5 }}>
				{username} hasn't posted yet.
			</Typography>
		</Container>
)

	const displayPosts = () => {
		let result = [];

		if (isLoading) return ;

		if (selectedTab === 0) {
			if (!posts?.length) return noPostsMessage;
			for (let post of posts) {
				result.push(
					<PostContainer post={post} />
				)	
			}
		} else {
			if (!reposts?.length) return noPostsMessage;
			for (let i = 0; i < reposts.length; i++) {
				result.push(<RepostContainer post={reposts[i]} idx={i} />)
			}
		}

		return result;
	}

	const handleChange = (event, newValue) => {
		setSelectedTab(newValue);
	};

	return (
		<>
			<Grid item xs={6}>
				{
					isLoading ? 
						<Skeleton
							animation="wave"
							height={100}
							width='100%'
						/>
						:
					<Paper elevation={2}>
						<UserProfileHeader/>
						<Box>
							<Tabs onChange={handleChange} value={selectedTab} variant='fullWidth'>
								<Tab label={'Posts'} />
								<Tab label={'Reposts'} />
							</Tabs>
							<Divider/>
							{displayPosts()}
						</Box>
					</Paper>
				}
			</Grid>
			<Grid item xs={3}>
				<HomeFixturesColumn/>
			</Grid>
		</>
	)
}

export default UserProfile;