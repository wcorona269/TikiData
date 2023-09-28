import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Counter from './counter'
import Leagues from './leagues/leagues'
import Favorites from './favorites'
import MatchesTimeline from '../matches/timeline';
import { Tab, Tabs, Typography, AppBar } from '@mui/material';
import { css } from '@emotion/css'

const Home = () => {
	const  [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	}

	return (
		<div className='Home'>
			{/* <AppBar position='static'> */}
				<Tabs
					value={value} 
					onChange={handleChange}
				>
					<Tab label='news'/>
					<Tab label='scores'/>
					<Tab label='stats'/>
				</Tabs>
			{/* </AppBar> */}
			<p>{value}</p>
		</div>
	)
}

export default Home