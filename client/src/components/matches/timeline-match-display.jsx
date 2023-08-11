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
					if (showAll === true) {

						return (
							<>
								<div id='competition-indicator'>
									<p>
										{match.league.name}
									</p>
									<p>
										{match.league.country}
									</p>
								</div>
								<TimelineMatchCard match={match} idx={idx} />
							</>
						)
					}
					
					return (
						<TimelineMatchCard match={match} idx={idx} competitions={competitions} />
					)
				}
				)}
			</ul>
		</div>
	)
}

export default TimelineMatchDisplay;