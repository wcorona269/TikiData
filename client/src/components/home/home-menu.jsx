import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArticleIcon from '@mui/icons-material/Article';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { List, ListItem, ListItemButton, Menu, Paper, Typography, useTheme } from '@mui/material';
import ListItemContent from '@mui/joy/ListItemContent';
import React from 'react';

const HomeMenu = ({ selectedTab, handleTabSelect }) => {
	const theme = useTheme();

	const buttons = [
		<ListItem disablepadding sx={{paddingLeft: '0px'}}>
			<ListItemButton onClick={() => handleTabSelect(0)}>
				{ selectedTab === 0 ?
					<HomeRoundedIcon fontSize='large'/> : <HomeOutlinedIcon fontSize='large'/>
				}	
				<ListItemContent sx={{marginLeft: '.5rem'}}>
					<Typography sx={{ fontFamily: selectedTab === 0 ? theme.typography.bold : theme.typography.fontFamily }} variant='h5'>home</Typography>
				</ListItemContent>
			</ListItemButton>
		</ListItem>,
		<ListItem disablepadding sx={{ paddingLeft: '0px' }}>
			<ListItemButton onClick={() => handleTabSelect(1)}>
				{ selectedTab === 1 ?
					<NotificationsIcon fontSize='large' /> : <NotificationsNoneIcon fontSize='large'/>
				}	
				<ListItemContent sx={{marginLeft: '.5rem'}}>
					<Typography sx={{ fontFamily: selectedTab === 1 ? theme.typography.bold : theme.typography.fontFamily }} variant='h5'>notifications</Typography>
				</ListItemContent>
			</ListItemButton>
		</ListItem>,
		<ListItem disablepadding sx={{ paddingLeft: '0px' }}>
			<ListItemButton onClick={() => handleTabSelect(2)}>
				{ selectedTab === 2 ?
					<ArticleIcon fontSize='large'/> : <ArticleOutlinedIcon fontSize='large' />
				}	
				<ListItemContent sx={{marginLeft: '.5rem'}}>
					<Typography sx={{ fontFamily: selectedTab === 2 ? theme.typography.bold : theme.typography.fontFamily }} variant='h5'>news</Typography>
				</ListItemContent>
			</ListItemButton>
		</ListItem>
	]

	return (
		<>
			<Typography className='section-heading' variant='h5'>
				dashboard
			</Typography>
			<List>
				{buttons}
			</List>
		</>
	)
}

export default HomeMenu;