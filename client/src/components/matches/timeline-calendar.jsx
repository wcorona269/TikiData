import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TimelineCalendar = ({date, setDate}) => {
	const [showCalendar, setShowCalendar] = useState(false);

	const formatDate = (date) => {
		return date.split(' ').slice(1, 3).join(' ');
	}

	return (
		<div className='timeline-calendar-container'>
			<button onClick={() => setShowCalendar(!showCalendar)}>
				{formatDate(date.toDateString())}
			</button>
			{showCalendar &&
			<div className='calendar-container'>
				<Calendar onChange={setDate} date={date}/>
			</div>
			}
		</div>
	)
}

export default TimelineCalendar;