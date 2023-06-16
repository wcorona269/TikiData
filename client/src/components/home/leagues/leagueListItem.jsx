import React , { useState } from 'react'

const LeagueListItem = ({nation}) => {
	const [name, info] = nation;
	const [isOpen, setIsOpen] = useState(false);
	const leagues = Object.keys(info['leagues']);
	const code = info['countryCode'];

	const handleMouseHover = () => {
		setIsOpen(true)
	}

	const handleMouseLeave = () => {
		setIsOpen(false)
	};

	// {console.log(info)}
	return (
		<div 
			className='league-list-item'
			key={name} 
			onMouseEnter={handleMouseHover}
			onMouseLeave={handleMouseLeave}
		>
			<h3>{name}</h3>
			{
				isOpen &&
			<ul>
				{leagues.map((league) => (
					<li>
						{league}
					</li>
				))}
			</ul>
			}
		</div>
	)
}

export default LeagueListItem;