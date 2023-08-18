import React from 'react'

const TimelineNavBar = ({selectedNation, nations, onTabSelect}) => {
	return (
		<nav className='timeline-nav-bar'>
			{nations.map((nation) => (
				<li key={nation}>
					<button
						className={nation === selectedNation ? 'selected-nation' : ''}
						onClick={() => onTabSelect(nation)}>
							{nation}
					</button>
				</li>
			))}
		</nav>
	)
}

export default TimelineNavBar
