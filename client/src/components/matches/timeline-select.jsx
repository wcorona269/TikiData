import React, { useEffect, useState } from 'react';

const TimelineSelect = ({onTabSelect, nations, selectedNation}) => {
	useEffect(() => {
		console.log(selectedNation)
	}, [selectedNation]);

	return (
		<select value={selectedNation} className='timeline-select' onChange={onTabSelect}>
			{nations.map(nation => (
				<option
					key={nation}
					value={nation}
				>
					{nation}
				</option>
			))}
		</select>
	)
}

export default TimelineSelect;