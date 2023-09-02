import React from 'react'
import TimelineCalendar from './timeline-calendar';
import TimelineSelect from './timeline-select';

const TimelineNavBar = ({selectedNation, nations, onTabSelect, date, setDate}) => {
	return (
		<div className='timeline-nav-bar'>
			<TimelineCalendar date={date} setDate={setDate} />
			<TimelineSelect nations={nations} onTabSelect={onTabSelect} selectedNation={selectedNation}/>
		</div>
			// <nav className='timeline-nav-bar'>
			// 	{nations.map((nation) => (
			// 		<li key={nation}>
			// 			<button
			// 				className={nation === selectedNation ? 'selected-nation' : ''}
			// 				onClick={() => onTabSelect(nation)}>
			// 					{nation}
			// 			</button>
			// 		</li>
			// 	))}
			// </nav>
	)
}

export default TimelineNavBar
