import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../actions/news_actions';
import { Container, Typography, Box, List, ListItem, ListItemButton, Grid, useTheme, Button, Paper } from '@mui/material';
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import HomeFixturesColumn from './home-fixtures-column';

const HomeNews = () => {
	const theme = useTheme()
	const dispatch = useDispatch();
	const news = useSelector(state => state.news?.news || []);
	const isLoading = useSelector(state => state.news?.isLoading);
	// const isLoading = true

	const [articleCount, setArticleCount] = useState(25)
	const [showButton, setShowButton] = useState(true);
	const [isLoadingMore, setIsLoadingMore] = useState(false)

	useEffect(() => {
		if (articleCount > news.length) {
			setShowButton(false)
		}
	}, [articleCount]);

	// let isLoading = true;
	useEffect(() => {
		if (news.length === 0) {
			dispatch(fetchNews())
		}
	}, [])

	
	useEffect(() => {}, [news])
	
	const handleClick = () => {
		setIsLoadingMore(true)
		setTimeout(() => {
			setIsLoadingMore(false)
			setArticleCount(articleCount + 25)
		}, 2000);
	}
	

	const displayArticle = (article, idx) => {
		return (
			<ListItem divider disablePadding key={idx}>
				<ListItemButton
					component="a"  // Set the component prop to 'a' to make it act like an anchor tag
					href={`https://${article.link}`} // Specify the URL of the article
					target="_blank" // Open the link in a new tab
					rel="noopener noreferrer" // Recommended for security to add rel attribute
				>
					<Grid container>
						<Grid item xs={9}>
							<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
								<Typography variant='caption' sx={{color: theme.palette.grey['700']}}>
									{article.media}
								</Typography>
								<Typography variant='subtitle1' className='home-article-title'>
									{article.title}
								</Typography>
								<Typography variant='caption' sx={{ color: theme.palette.grey['700'] }}>
									{article.date}
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<img src={article.img} style={{ width: '60%', margin: 'auto' }}/>
						</Grid>
					</Grid>
				</ListItemButton>
			</ListItem>
		)
	}


	const displayNews = (articles) => {
		let result = [];
		let max = Math.min(articles.length, articleCount)

		for (let i = 0; i < max; i++) {
			result.push(displayArticle(articles[i], i));
		}
		return (
			<List sx={{width: '100%'}}>
				{result}
			</List>
		)
	}

	return (
		<>
			<Grid item xs={6}>
				<Paper elevation={2} sx={{display: 'flex', flexDirection: 'column', minHeight: '40rem'}}>
					<Typography variant='h5' className='section-heading'>
						News
					</Typography>
					<Box sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', width: '100%', minHeight: '40rem'}}>
						{ isLoading ?
							<CircularProgress color='primary' sx={{marginTop: '3rem', margin: 'auto'}}/> :
							displayNews(news)
						}
						{ isLoading ? <></> :
							!isLoadingMore ?
								<Button onClick={handleClick} variant="outlined" sx={{ height: '3rem', width: '100%' }}>
									<Typography variant='subtitle1'>
										See More
									</Typography>
								</Button> :
								<Button variant="outlined" sx={{ height: '3rem', width: '100%' }} >
									<CircularProgress size='2rem' />
								</Button>
						}
					</Box>
					<ScrollToTopOnLoad />
				</Paper>
			</Grid>
			<Grid item xs>
				<HomeFixturesColumn/>
			</Grid>
		</>
	)
	}

export default HomeNews
