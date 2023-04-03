import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom'

const MatchesTimeline = () => {

	const matches = [
		['Manchester United vs. Manchester City', '4:30PM', 'Old Trafford'],
		['Real Madrid vs. Barcelona', '6:00PM', 'Bernabeu Stadium'],
		['Juventus vs. Napoli', '9:00PM', 'Allianz Stadium']
	]

	const listMatches = (matches) => {
		return (
			matches.map((match, idx) => 
					<li key={idx}>
						{match[0]}, {match[1]}, {match[2]}
					</li>
			)
		)
	}

	return (
		<div className='timeline'>
			Matches Timeline
			<ul>
				{listMatches(matches)}
			</ul>
		</div>
	)
}

export default MatchesTimeline