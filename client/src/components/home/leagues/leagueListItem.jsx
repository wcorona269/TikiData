import React , { useState } from 'react'
import { Link } from 'react-router-dom';

const LeagueListItem = ({nation}) => {
	const [name, info] = nation;
	const [isOpen, setIsOpen] = useState(false);
	const leagueNames = Object.keys(info['leagues']);
	const leaguesObject = info['leagues'];
	const code = info['countryCode'];
	
	const handleMouseHover = () => {
		setIsOpen(true)
	}

	const handleMouseLeave = () => {
		setIsOpen(false)
	};

	return (
		<div 
			className={`league-list-item ${isOpen ? 'open' : ''}`}
			key={name} 
			onMouseEnter={handleMouseHover}
			onMouseLeave={handleMouseLeave}
		>
			<h3>{name}</h3>
			{
				isOpen &&
			<ul>
				{leagueNames.map((league) => (
					<Link to={`/league-overview/${leaguesObject[league]}`}>
					<li>
						{league}
					</li>
					</Link>
				))}
			</ul>
			}
		</div>
	)
}

export default LeagueListItem;