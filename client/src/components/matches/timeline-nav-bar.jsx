import React from 'react'

const TimelineNavBar = ({nations, onTabSelect}) => {
	return (
		<nav className='timeline-nav-bar'>
			{nations.map((nation) => (
				<li key={nation}>
					<button
						onClick={() => onTabSelect(nation)}>
							{nation}
					</button>
				</li>
			))}
		</nav>
	)
}

export default TimelineNavBar
