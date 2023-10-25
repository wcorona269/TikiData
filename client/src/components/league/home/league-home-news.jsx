import React, { useEffect, useState } from 'react';
import { Box, Grid, List, ListItem, ListItemButton, Pagination, Paper, Stack, Link, Typography } from '@mui/material';
import { splitArticleIntoPages } from '../../news/sub-articles-timeline';
import Article from '../../news/article';

const LeagueHomeNews = ({ name, logo, news }) => {
	const [page, setPage] = useState(1)

	const handleChange = (event, newValue) => {
		setPage(newValue);
	}

	const displayNews = (news) => {
		let result = [];

		news.map((article, idx) => {
			result.push(
				<Article article={article} idx={idx} />
			)
		})

		return result;
	}

	const articlesByPage = splitArticleIntoPages(news, 12);

	return (
		<Paper
			className='home-paper'
			id='league-home-news'
			elevation={2}
		>
			<Typography variant='h6' gutterbottom className='section-heading'>
				<img src={logo} style={{ height: '1.5rem', width: '1.5rem', marginRight: '.25rem' }} />
					{name} News
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