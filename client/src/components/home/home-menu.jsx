import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArticleIcon from '@mui/icons-material/Article';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { List, ListItem, ListItemButton, Menu, Paper, Typography, useTheme } from '@mui/material';
import ListItemContent from '@mui/joy/ListItemContent';
import PublicIcon from '@mui/icons-material/Public';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import React from 'react';
import SectionHeading from '../util/section-heading';

const HomeMenu = ({ selectedTab, handleTabSelect }) => {
	const theme = useTheme();

	const buttons = [
		<ListItem disablepadding sx={{paddingLeft: '0px'}}>
			<ListItemButton onClick={() => handleTabSelect(0, 'home')}>
				{ selectedTab === 0 ?
					<HomeRoundedIcon fontSize='large'/> : <HomeOutlinedIcon fontSize='large'/>
				}	
				<ListItemContent sx={{marginLeft: '.5rem'}}>
					<Typography sx={{ fontFamily: selectedTab === 0 ? theme.typography.bold : theme.typography.fontFamily }} variant='h5'>Home</Typography>
				</ListItemContent>
			</ListItemButton>
		</ListItem>,
		<ListItem disablepadding sx={{ paddingLeft: '0px' }}>
			<ListItemButton onClick={() => handleTabSelect(1, 'notifications')}>
				{ selectedTab === 1 ?
					<NotificationsIcon fontSize='large' /> : <NotificationsNoneIcon fontSize='large'/>
				}	
				<ListItemContent sx={{marginLeft: '.5rem'}}>
					<Typography sx={{ fontFamily: selectedTab === 1 ? theme.typography.bold : theme.typography.fontFamily }} variant='h5'>Notifications</Typography>
				</ListItemContent>
			</ListItemButton>
		</ListItem>,
		<ListItem disablepadding sx={{ paddingLeft: '0px' }}>
			<ListItemButton onClick={() => handleTabSelect(2, 'matches')}>
				<SportsSoccerIcon fontSize='large' />
				<ListItemContent sx={{marginLeft: '.5rem'}}>
					<Typography sx={{ fontFamily: selectedTab === 2 ? theme.typography.bold : theme.typography.fontFamily }} variant='h5'>Matches</Typography>
				</ListItemContent>
			</ListItemButton>
		</ListItem>,
		<ListItem disablepadding sx={{ paddingLeft: '0px' }}>
			<ListItemButton onClick={() => handleTabSelect(3, 'explore')}>
			{ selectedTab === 3 ?
				<TravelExploreIcon fontSize='large'/> :
				<PublicIcon fontSize='large' />
			}	
				<ListItemContent sx={{marginLeft: '.5rem'}}>
					<Typography sx={{ fontFamily: selectedTab === 3 ? theme.typography.bold : theme.typography.fontFamily }} variant='h5'>Explore</Typography>
				</ListItemContent>
			</ListItemButton>
		</ListItem>,
		<ListItem disablepadding sx={{ paddingLeft: '0px' }}>
			<ListItemButton onClick={() => handleTabSelect(4, 'news')}>
				{ selectedTab === 4 ?
					<ArticleIcon fontSize='large'/> : <ArticleOutlinedIcon fontSize='large' />
				}	
				<ListItemContent sx={{marginLeft: '.5rem'}}>
					<Typography sx={{ fontFamily: selectedTab === 4 ? theme.typography.bold : theme.typography.fontFamily }} variant='h5'>News</Typography>
				</ListItemContent>
			</ListItemButton>
		</ListItem>,
	]

	return (
		<>
			<SectionHeading variant='h5' content='Dashboard' />
			<List>
				{buttons}
			</List>
		</>
	)
}

export default HomeMenu;