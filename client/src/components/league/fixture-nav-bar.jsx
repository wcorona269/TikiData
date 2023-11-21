import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import shorthandMonthsOfYear from './shorthandMonths';
import { Divider } from '@mui/material';

const FixtureNavBar = ({selectedDate, dates, handleChange, setSelectedDate}) => {
	return (
		<Box >
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
						fullDate <= today &&
						(selectedDate === 0 || fullDate > new Date(dates[selectedDate]))
				) {
						setSelectedDate(idx - 1);
				}

				const dateInfo = date.split('-');
				const formattedDate = `${shorthandMonthsOfYear[Number(dateInfo[1]) - 1]} ${dateInfo[2]}`

				return (
					<Tab label={formattedDate}/>
				)
			})}
			</Tabs>
			<Divider/>
		</Box>
	);
}

export default FixtureNavBar;