import React, { useEffect, useState } from 'react';
import MatchTimelineTable from './match-timeline-table';

const TimelineMatchDisplay = ({matches, competitions, selectedNation}) => {
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
		matchesList = {};
		for (let key in matches) {
			if (key.includes(selectedNation)) {
				matchesList[key] = matches[key];
			}
		}
	} else {
		matchesList = matches;
	}

	const displayMatchesList = () => {
		let result = []
		for (let key in matchesList) {
			result.push(<MatchTimelineTable nation={key} matches={matchesList[key]}/>)
		}

		return result;
	}

	return (
		<ul>
			{displayMatchesList()}
		</ul>
	)
}

export default TimelineMatchDisplay;