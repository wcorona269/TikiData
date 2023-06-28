import React, {useEffect, useState} from 'react';
import GoalComponent from './events/goalComponent';
import CardComponent from './events/cardComponent';

const TimelineEventsBar = ({events}) => {
	useEffect(() => {

	}, [events])

	if (events === null || events.length === 0) return null

	const relevantEvents = events.filter(event => 
		event.type === 'Goal' ||
		event.type === 'Yellow Card' ||
		event.type === 'Red Card'
	)

	return (
		<ul>
			{relevantEvents.map((event, idx) => {
				if (event.type === 'Goal') {
					return <GoalComponent key={idx} event={event}/>
				} else {
					return <CardComponent key={idx} event={event}/>
				}
			})}
		</ul>
	)
}

export default TimelineEventsBar;