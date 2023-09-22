import React, { useEffect, useState } from 'react';

const TimelineSelect = ({onTabSelect, nations, selectedNation}) => {
	useEffect(() => {
		
	}, [selectedNation]);

	const [showOptions, setShowOptions] = useState(false);

	return (
		<div className='timeline-select-container'>
			<div className='timeline-dropdown-wrapper'>
				<div className='selected-league-container'>
					<div className='selected-league' onClick={() => setShowOptions(!showOptions)}>
						<p>
							Filter by Country
						</p>
						{selectedNation}
				</div>
					<i class="fa-solid fa-caret-down"></i>
				</div>
				{
				showOptions &&
				<ul className='timeline-select'  onMouseLeave={() => setShowOptions(false)}>
					{
						nations.map(nation => (
							<li
								key={nation}
								value={nation}
								onClick={onTabSelect}
							>
								{nation}
							</li>
						))
					}
				</ul>
				}
			</div>
		</div>
	)
}

export default TimelineSelect;