import './fixture-nav-bar.scss';
import React from 'react'
import shorthandMonthsOfYear from './shorthandMonths';


// FIXTURE NAV BAR
// create set with unique fixture dates
// create a ul with a li for each date

const FixtureNavBar = ({selectedDate, dates, onTabSelect}) => {

	return (
		<nav className='fixture-nav-bar'>
			<ul>
				{dates.map((date, idx) => {
					const dateInfo = date.split('-');
					const formattedDate = `${shorthandMonthsOfYear[Number(dateInfo[1]) - 1]} ${dateInfo[2]}`

					return (
						<li key={formattedDate}>
							<button
								class={date === selectedDate ? 'selected-date' : ''}
								// href={`#${formattedDate}`} 
								onClick={() => onTabSelect(date)}>
								{formattedDate}
							</button>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default FixtureNavBar;