import React, { useEffect, useState } from 'react';
import MatchTimelineTable from './match-timeline-table';
import TimelineSelect from '../nav-bar/timeline-select';
import dayjs from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import monthsOfYear from '../../club/monthsOfYear';

import { Box,
	Typography,
	Tabs,
	Tab
} from '@mui/material';

export const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const TimelineMatchDisplay = ({matches, competitions, selectedNation, setSelectedNation, date, setDate, nations, nationsSet, onTabSelect }) => {
	const [showAll, setShowAll] = useState(true);
	let matchesList;


	const dayOfWeek = daysOfWeek[new Date(date).getDay()]
	const month = monthsOfYear[new Date(date).getMonth()]
	const dateNumber = new Date(date).getDate();
	const formatted_date_string = `${dayOfWeek}, ${month.slice(0, 3)} ${dateNumber}`

	useEffect(() => {
		if (selectedNation !== 'All') {
			setShowAll(false)
		} else {
			setShowAll(true)
		}
	}, [selectedNation])


	if (showAll === false) {
		matchesList = {};
		for (let key in matches) {
			if (key.includes(selectedNation)) {
				matchesList[key] = matches[key];
			}
		}
	} else {
		matchesList = matches;
	}

	const displayMatchesList = () => {
		let result = []
		for (let key in matchesList) {
			result.push(<MatchTimelineTable nation={key} matches={matchesList[key]}/>)
		}

		return result;
	}

	const filter_options = ['All', 'World', 'China', 'England', 'France', 'Germany', 'Portugal', 'Spain', 'USA']
	console.log({nationsSet})
	return (
		<>
			<Box
				sx={{
					position: 'sticky',
					top: '0',
					backgroundColor: 'white',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Box
					sx={{display: 'flex', 
					flexDirection: 'row', 
					width: '100%',
					justifyContent: 
					'space-between !Important', 
					p: '.5rem'
				}}
				>
					<Typography variant='h5' sx={{padding: '1rem'}}>
						Matches
					</Typography>
					<Box sx={{display: 'flex', flexDirection: 'row', gap: '.5rem', alignItems: 'center', marginRight: '.5rem'}}>
						{/* <Typography variant='body2'>Filter by Country</Typography> */}
						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<DatePicker
								label={formatted_date_string}
								views={['day']}
								date={date}
								onChange={(newValue) => setDate(newValue['$d'])}
							/>
						</LocalizationProvider>
						<TimelineSelect nations={nations} onTabSelect={onTabSelect} selectedNation={selectedNation}/>
					</Box>
				</Box>
				<Box>
					<Tabs
						value={selectedNation}
						variant="scrollable"
						scrollButtons="auto"
					>
					{filter_options.map(value => {
						let result = [];

						if (nationsSet.has(value)) {
							result.push(<Tab value={value} label={value} onClick={() => setSelectedNation(value)} />)
						}
						
						return result;
					})}
					</Tabs>
				</Box>
			</Box>
			<ul>
				{displayMatchesList()}
			</ul>
		</>
	)
}

export default TimelineMatchDisplay;