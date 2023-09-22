import './timeline-nav-bar.scss'
import React from 'react'
import TimelineCalendar from '../calendar/timeline-calendar';
import TimelineSelect from './timeline-select';
import ResetFilters from './reset-filters';

const TimelineNavBar = ({selectedNation, nations, onTabSelect, date, setDate, resetFilters}) => {
	return (
		<div className='timeline-nav-bar'>
			<TimelineSelect nations={nations} onTabSelect={onTabSelect} selectedNation={selectedNation}/>
			<TimelineCalendar date={date} setDate={setDate} />
			<ResetFilters resetFilters={resetFilters}/>
		</div>
	)
}

export default TimelineNavBar
