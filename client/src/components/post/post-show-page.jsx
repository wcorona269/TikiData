import { Avatar, Box, Button, CircularProgress, Divider, Grid, IconButton, Link, Paper, Typography, dividerClasses, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fetchPost } from '../../actions/post_actions';
import RepostButton from '../home/repost-popper';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { createLike, createRepost, deleteLike, deleteRepost, fetchPosts } from '../../actions/post_actions';
import { createNotification } from '../../actions/notification_actions';
import CreateComment from '../home/create-comment';
import CommentContainer from '../home/comment-container';
import LiveFixturesDisplay from '../home/live-fixtures-display';
import HomeFixturesColumn from '../home/home-fixtures-column';
import SectionHeading from '../util/section-heading';

const PostShowPage = () => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const navigate = useNavigate();
	const { id } = useParams();
	const post = useSelector(state => state.posts?.post);
	const user_id = useSelector(state => state.session?.user?.id);
	const isLoading = useSelector(state => state.posts.isLoading);
	const username = useSelector(state => state.session?.user?.username);

	const [postLikes, setPostLikes] = useState(post?.likes?.length || 0);
	const [reposts, setReposts] = useState(post?.reposts?.length || 0);
	const [createComment, setCreateComment] = useState(false);
	const [isLiked, setIsLiked] = useState(false);
	const [isReposted, setIsReposted] = useState(false);

	useEffect(() => {
		if (!post) return;
		for (let like of post?.likes) {
			if (like.user_id === user_id) {
				setIsLiked(true)
			}
		}
	}, [post]);

	useEffect(() => {
		if (id !== post?.id && !isLoading) {
			dispatch(fetchPost(id));
		}
}, [id]);
	const handleLike = () => {
		if (!post || !post?.likes) {
			return; // Exit the function if post or post.likes is undefined
		}

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
			setPostLikes(postLikes - 1)
		} else {
			dispatch(createLike(like_info))
			dispatch(createNotification(notif_info))
			setPostLikes(postLikes + 1)
		}
		setIsLiked(!isLiked);
	}
	const handleRepost = () => {
		const repost_info = {
			'post_id': post.id,
			'user_id': user_id,
		}

		if (isReposted === true) {
			dispatch(deleteRepost(repost_info))
			setReposts(reposts - 1)
		} else {
			const notif_info = {
				'recipient_id': post.user_id,
				'sender_id': user_id,
				'message': `${username} reposted your post`,
				'post_id': post.id
			}
			dispatch(createRepost(repost_info));
			dispatch(createNotification(notif_info));
			setReposts(reposts + 1)
		}
		setIsReposted(!isReposted);
	}
	const displayComments = (comments) => {
		let result = [];
		if (!comments) return;

		comments.map((comment, idx) => {
			result.push(
				<CommentContainer key={idx} comment={comment}/>
			)
		})

		return result;
	}
	const buttons = [
		<Button key={0} aria-label="favorite" size="large" sx={{ borderRadius: '1rem', width: 'fit-content', color: createComment ? theme.palette.primary.main : theme.palette.grey['700'] }} onClick={() => setCreateComment(!createComment)}>
			<ChatBubbleOutlineIcon sx={{ marginRight: '.25rem' }} fontSize='medium' />
			{post?.comments?.length}
		</Button>,
		<RepostButton key={1} handleRepost={handleRepost} reposts={reposts} isReposted={isReposted} setIsReposted={setIsReposted} post={post} user_id={user_id} />,
		<Button key={2} aria-label="favorite" size="large" sx={{ borderRadius: '1rem', width: 'fit-content', color: isLiked ? theme.palette.primary.main : theme.palette.grey['700'] }} onClick={handleLike} >
			{isLiked ? <FavoriteIcon sx={{ marginRight: '.25rem' }} fontSize='medium' /> : <FavoriteBorderIcon sx={{ marginRight: '.25rem' }} />}
			{postLikes}
		</Button>,
	];

	const content = [
		<IconButton sx={{ p: 0, m: 0, marginRight: 2 }} onClick={() => navigate('/home')}>
			<ArrowBackIcon />
		</IconButton>,
		`Post by ${post?.username}`
	]

	return (
		<>
			<Grid item xs={6}>
				<Paper elevation={2}>
					<SectionHeading variant='h6' content={content} />
					<Box display='flex' flexDirection='column' justifyContent={'center'} padding={2} >
						{ isLoading || !post ? 
							<Box height={150} display='flex' alignItems='center' width='100%'>
								<CircularProgress/>
							</Box> :
							[<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'left', width: '100%' }} >
								<Avatar sx={{ marginRight: '.5rem', width: 50, height: 50 }}/>
								<Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
									<Link underline='hover' onClick={() => navigate(`/user/${post?.username}`)} >
										<Typography variant='subtitle1' sx={{fontFamily: theme.typography.bold}} >
											{post?.username}
										</Typography>
									</Link>
									<Typography variant='caption'>
										{/* <ReactTimeAgo date={post?.created_at} locale="en-US" /> */}
									</Typography>
								</Box>
							</Box>,
							<Typography variant='subtitle1' sx={{py: 2}}>
								{post?.text}
							</Typography>,
							<Divider/>,
							<Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
								{buttons}
							</Box>,
							<Divider/>,
							[
								createComment &&
								<Box sx={{py: 2}}>
									<CreateComment post={post}/>
								</Box>
							],
							displayComments(post?.comments)
						]}
					</Box>
				</Paper>
			</Grid>
			<Grid item xs={3}>
				<HomeFixturesColumn />
			</Grid>
		</>
	)
}

export default PostShowPage;