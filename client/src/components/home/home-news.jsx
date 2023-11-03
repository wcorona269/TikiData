import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../actions/news_actions';
import { Container, Typography, Box, List, ListItem, ListItemButton, Grid, useTheme, Button, Paper } from '@mui/material';
import ScrollToTopOnLoad from '../util/scroll-to-top-on-load';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import HomeFixturesColumn from './home-fixtures-column';
import Article from '../news/article';
import Title from '../util/section-heading';

const HomeNews = () => {
	const theme = useTheme();
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
	

	const displayNews = (articles) => {
		let result = [];
		let max = Math.min(articles.length, articleCount)

		for (let i = 0; i < max; i++) {
			result.push(<Article article={articles[i]} idx={i} />);
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
				<Paper elevation={1} sx={{display: 'flex', flexDirection: 'column', minHeight: '40rem'}}>
					<Title variant='h5' content='News' />
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
			<Grid item xs={3} sx={{ position: 'sticky', top: '3rem' }}>
				<HomeFixturesColumn/>
			</Grid>
		</>
	)
	}

export default HomeNews
