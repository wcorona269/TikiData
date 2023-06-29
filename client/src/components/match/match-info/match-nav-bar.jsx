import React from 'react'

const MatchNavBar = ({changeSelection, selectedTab}) => {
	const columns = ['Events', 'Lineups', 'Stats']

	return (
		<nav className='match-overview-nav-bar'>
			<ul>
				{columns.map((column, idx) => {
					let isSelected = column === selectedTab ? true : false;

					return (
						<li 
							key={idx}
							className={isSelected ? 'selected' : ''}
							onClick={() => changeSelection(column)}
						>
							{column}
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default MatchNavBar;