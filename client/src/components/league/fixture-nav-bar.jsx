import './fixture-nav-bar.scss';
import React, { useEffect } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import shorthandMonthsOfYear from './shorthandMonths';

const FixtureNavBar = ({selectedDate, dates, handleChange, setSelectedDate}) => {

	return (
		<Tabs
			value={selectedDate}
			onChange={handleChange}
			variant="scrollable"
			scrollButtons="auto"
			aria-label="scrollable auto tabs example"
		>
		{dates.map((date, idx) => {

			let fullDate = new Date(date);
			let today = new Date();

			if (
				fullDate.getFullYear() === today.getFullYear() &&
				fullDate.getMonth() === today.getMonth() &&
				fullDate.getDate() >= today.getDate() &&
				selectedDate === 0
			) {
				setSelectedDate(idx - 1)
			}

			const dateInfo = date.split('-');
			const formattedDate = `${shorthandMonthsOfYear[Number(dateInfo[1]) - 1]} ${dateInfo[2]}`

			return (
				<Tab label={formattedDate}/>
			)
		})}
		</Tabs>
	);
}




// const FixtureNavBar = ({selectedDate, dates, onTabSelect}) => {

// 	return (
// 		<nav className='fixture-nav-bar'>
// 			<ul>

// 			</ul>
// 		</nav>
// 	)
// }

export default FixtureNavBar;