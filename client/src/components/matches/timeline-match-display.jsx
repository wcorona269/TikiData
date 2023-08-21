import React, { useEffect, useState } from 'react';
import TimelineMatchCard from './timeline-match-card';

const TimelineMatchDisplay = ({sortedMatches, competitions, selectedNation}) => {
	const [showAll, setShowAll] = useState(true)
	let matchesList;

	useEffect(() => {
		if (selectedNation !== 'All') {
			setShowAll(false)
		} else {
			setShowAll(true)
		}
	}, [selectedNation])


	if (showAll === false) {
		matchesList = sortedMatches?.filter(match => match.league.country === selectedNation)
	} else {
		matchesList = sortedMatches;
	}

	return (
		<div className='timeline'>
			<ul className='matches-timeline'>
				{matchesList.map((match, idx) => {
					
					return (
						<TimelineMatchCard match={match} idx={idx} competitions={competitions} showAll={showAll} />
					)
				}
				)}
			</ul>
		</div>
	)
}

export default TimelineMatchDisplay;