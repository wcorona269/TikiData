import React from 'react'

const GoalComponent = ({event, key}) => {
	const ball = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Soccer_ball.svg/1200px-Soccer_ball.svg.png'

	return (
		<li key={key} className='event-timeline-list-item'>
			{/* {console.log(event)} */}
			<p><img src={ball}/> {event.player.name || 'Name Unavailable' } {event.time.elapsed}'</p>
		</li>
	)
}

export default GoalComponent;