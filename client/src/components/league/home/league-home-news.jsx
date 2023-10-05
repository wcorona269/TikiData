import { Box, Grid, List, ListItem, ListItemButton, Paper, Typography } from '@mui/material';
import React from 'react';

const LeagueHomeNews = ({news}) => {
	console.log(news);

	const displayNews = (news) => {
		let result = [];

		for (let article of news) {
			result.push(
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
			)
		}

		return result;
	}

	return (
		<Paper
			className='league-home-paper'
			id='league-home-news'
			elevation={6}
		>
			<Typography variant='h6' gutterbottom className='section-heading'>
				News
			</Typography>
			<List>
				{displayNews(news)}
			</List>
		</Paper>
	)
}

export default LeagueHomeNews