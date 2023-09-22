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
			<div className='calendar-button-container'>
				<div id='toggle-show-calendar' onClick={() => setShowCalendar(!showCalendar)}>
					<div>
						Filter by Date
					</div>
					<p>
						{formatDate(date.toDateString())}
					</p>
				</div>
				<i class="fa-solid fa-caret-down"></i>
			</div>
			{showCalendar &&
			<div className='calendar-container' onMouseLeave={() => setShowCalendar(false)}>
				<Calendar onChange={setDate} date={date}/>
			</div>
			}
		</div>
	)
}

export default TimelineCalendar;