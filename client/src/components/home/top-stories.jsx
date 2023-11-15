import { Box, Divider, Link, List, ListItem, ListItemButton, Paper, Typography, useTheme } from '@mui/material';
import React, { useEffect } from 'react'
import Title from '../util/section-heading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopStories } from '../../actions/news_actions';

const TopStories = () => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const news = useSelector(state => state.news?.news);
	const top_stories = useSelector(state => state.news?.top_stories) || [];
	const isLoading = useSelector(state => state.news?.isLoading);

	useEffect(() => {
		if (!isLoading && !top_stories.length) {
			dispatch(fetchTopStories())
		}
	}, [])

	useEffect(() => {}, [top_stories])

	const displayTopStories = () => {
		let result = [];
		

		if (!top_stories.length) return result;
		for (let story of top_stories) {
			let title = story.title.split(' ').slice(0, 10).join(' ')
			if (result.length > 5) break;
			result.push(
				<>
					<ListItem disablePadding>
						<ListItemButton
							sx={{ m: 0 }}
							component='a'
							href={`https://${story.link}`} 
							target="_blank" 
							rel="noopener noreferrer"
						>
							<Box sx={{display: 'flex', flexDirection: 'column', gap: 1, justifyContent: 'space-around'}}>
								<Link>
									<Typography underline='hover' sx={{fontSize: 14 }}>
										{title} ...
									</Typography>
								</Link>
								<Typography sx={{color: theme.palette.text.secondary, fontSize: 10}}>
									{story.media}
								</Typography>
							</Box>
						</ListItemButton>
					</ListItem>
					<Divider/>
				</>
			)
		}
		return result;
	}

	return (
		<Paper>
			<Title variant='h5' content='Top Stories'/>
			<List sx={{p: 0}}>
				{displayTopStories()}
			</List>
		</Paper>
	)
}

export default TopStories;