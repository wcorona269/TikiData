import React from 'react'
import { useParams } from 'react-router-dom';
import monthsOfYear from './monthsOfYear';

export const formatDate = (date) => {
	const dateString = new Date(date)
	const month = dateString.getMonth();
	const day = dateString.getDate();
	const abbreviatedMonth = monthsOfYear[month].slice(0, 3)
	return `${abbreviatedMonth} ${day}`;
}

const ClubFixtureListItem = ({fixture, idx, isNewMonth, month}) => {
	const { clubId } = useParams();
	const isAway = Number(clubId) === fixture.teams.away.id;
	const versus = isAway === true ? '@' : 'vs.'
	const opponent = isAway === true ? fixture.teams.home.name : fixture.teams.away.name;
	
	const homeGoals = fixture.goals.home;
	const awayGoals = fixture.goals.away;



	const displayResult = () => {		
		if (!homeGoals || !awayGoals) {
			return '-'
		}

		if (homeGoals === awayGoals) {
			return `D ${homeGoals} - ${awayGoals}`
		}
		
		if ((!isAway && homeGoals > awayGoals) || (isAway === true && awayGoals > homeGoals)) {
			return `W ${homeGoals} - ${awayGoals}`
		}

		return `L ${homeGoals} - ${awayGoals}`
	}

	return (
		<div className='club-fixtures-list-row'>
			{
				isNewMonth &&
				<p key={idx + 100} id='new-month-p'>
					{month}
				</p>}
			<li key={idx} className='club-fixture-list-item'>
				<p className='club-fixture-li-date'>
					{formatDate(fixture.fixture.date)}
				</p>
				<p className='club-fixture-li-opponent'>
					{versus} {opponent}
				</p>
				<p className='club-fixture-li-result'>
					{displayResult()}
				</p>
			</li>
		</div>
	)
}

export default ClubFixtureListItem;