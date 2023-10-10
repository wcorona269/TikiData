import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Counter from './counter'
import Leagues from './leagues/leagues'
import Favorites from './favorites'
import MatchesTimeline from '../matches/matches-timeline';
import { Tab, Tabs, Typography, AppBar, Container } from '@mui/material';
import { css } from '@emotion/css'

const Home = () => {
	const  [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	}

	return (
		<Container>
			Hello
		</Container>
	)
}

export default Home