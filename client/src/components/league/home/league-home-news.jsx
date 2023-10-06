import React, { useState } from 'react';
import { Box, Grid, List, ListItem, ListItemButton, Pagination, Paper, Stack, Typography } from '@mui/material';
import { splitArticleIntoPages } from '../../news/sub-articles-timeline';
import { Link } from 'react-router-dom';

const LeagueHomeNews = ({news}) => {
	const [page, setPage] = useState(1);

	const handleChange = (event, newValue) => {
		setPage(newValue);
	}

	const displayNews = (news) => {
		let result = [];

		for (let article of news) {
			result.push(
				<a target='_blank' href={`https://${article.link}`}>
					<ListItem disablePadding className='league-home-news-item'>
						<ListItemButton>
							<Grid container>
								<Grid item xs={9} className='news-item-title'>
									<Typography variant='subtitle1'>
										{article.title}
									</Typography>
								</Grid>
								<Grid item xs={3}>
									<img src={article.img}/>
								</Grid>
							</Grid>
						</ListItemButton>
					</ListItem>
				</a>
			)
		}

		return result;
	}

	const articlesByPage = splitArticleIntoPages(news, 12);

	return (
		<Paper
			className='home-paper'
			id='league-home-news'
			elevation={6}
		>
			<Typography variant='h6' gutterbottom className='section-heading'>
				News
			</Typography>
			<List>
				{displayNews(articlesByPage[page])}
			</List>
			<Stack spacing={2} className='news-pagination'>
				<Typography>Page</Typography>
				<Pagination count={articlesByPage.length - 1} page={page} onChange={handleChange} variant="outlined" shape="rounded" />
			</Stack>
		</Paper>
	)
}

export default LeagueHomeNews