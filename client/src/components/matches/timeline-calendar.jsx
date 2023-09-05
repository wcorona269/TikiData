import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const TimelineCalendar = ({date, setDate}) => {
	const [showCalendar, setShowCalendar] = useState(false);

	useEffect(() => {
		setShowCalendar(false);
	}, [date])

	const formatDate = (date) => {
		return date.split(' ').slice(1, 3).join(' ');
	}

	return (
		<div className='timeline-calendar-container'>
			<button id='toggle-show-calendar' onClick={() => setShowCalendar(!showCalendar)}>
				<i class="fa-regular fa-calendar"></i>
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