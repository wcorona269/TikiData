import './timeline-nav-bar.scss'
import React from 'react'
import TimelineSelect from './timeline-select';
import TimelineSearchBar from './timeline-search-bar';
import dayjs from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Button } from '@mui/material';


const TimelineNavBar = ({selectedNation, nations, onTabSelect, date, setDate, resetFilters}) => {
	return (
		<div className='timeline-nav-bar'>
			<div>
				<TimelineSelect nations={nations} onTabSelect={onTabSelect} selectedNation={selectedNation}/>
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DatePicker 
						label='Date'
						date={date}
						onChange={(newValue) => setDate(newValue['$d'])}
					/>
				</LocalizationProvider>
				{/* <TimelineSearchBar/> */}
			</div>
			<div>
				<Button
					variant="contained"
					className='reset-filters'
					onClick={() => resetFilters()}
					>
					<i class="fa-solid fa-rotate-right"></i>
					Reset Filters
				</Button>
			</div>
		</div>
	)
}

export default TimelineNavBar;