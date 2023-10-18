import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../actions/news_actions';
import { Container, Typography, Box, List, ListItem, ListItemButton, Grid, useTheme, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';

const HomeNews = () => {
	const theme = useTheme()
	const dispatch = useDispatch();
	const news = useSelector(state => state.news?.news || []);
	let isLoading = useSelector(state => state.news?.isLoading);

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
		console.log(article)
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
		<Box>
			<Typography variant='h5' className='section-heading'>
				News
			</Typography>
			<Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
				{ isLoading ?
					<CircularProgress color='primary' sx={{marginTop: '3rem' }}/> :
					displayNews(news)
				}
				{ showButton &&
					[ !isLoadingMore ?					
						<Button onClick={handleClick} variant="outlined" sx={{height: '3rem'}}>
							<Typography variant='subtitle1'>
								See More
							</Typography>
						</Button> :
						<Button variant="outlined" sx={{ height: '3rem' }}>
							<CircularProgress size='2rem'/>
						</Button>
					]
				}
			</Box>
		</Box>
	)
	}

export default HomeNews
