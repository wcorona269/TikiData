import React, { useEffect, useState } from 'react';

const TimelineSelect = ({onTabSelect, nations, selectedNation}) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		console.log(isOpen)
	}, [isOpen])

	const handleOptionClick = (nation) => {
		onTabSelect(nation);
		setIsOpen(false);
	}

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	}

	return (
		<div className={`timeline-select ${isOpen ? 'open' : ''}`}>
			<div className='select-button' onClick={toggleDropdown}>
				{selectedNation}
			</div>
			<ul className='filter-options'>
				{nations.map(nation => (
					<li
						key={nation}
						value={nation}
						onClick={() => handleOptionClick(nation)}
						className={selectedNation === nation ? 'selected' : ''}
					>
						{nation}
					</li>
				))}
			</ul>
		</div>
	)
}

export default TimelineSelect;