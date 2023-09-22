import './season-select.scss';
import React from 'react'

const SeasonSelect = ({season, showSeason, setShowSeason, handleSeasonChange, availableSeasons}) => {
	let seasons = availableSeasons;
	if (!seasons) {
		seasons = [
			2023,
			2022,
			2021,
			2020,
			2019,
			2018,
			2017,
			2016,
			2015
		]
	}
	
	const displayListOptions = (seasons) => {
		seasons.sort((a, b) => b - a)
		let result = [];

		for (let season of seasons) {
			let lastTwoDigits = season % 100;
			lastTwoDigits += 1;
			let seasonString = `${season}/${lastTwoDigits}`
			result.push(
				<li key={seasonString} value={seasonString} onClick = {handleSeasonChange}>{seasonString}</li>
			)
		}

		return result;
	}

	return (
		<div id='league-profile-season-select'>
			<div id='dropdown-wrapper'>
				<div id='selected-season' onClick={() => setShowSeason(!showSeason)}>
					<p>
						Filter by Season
					</p>
					{season}
				</div>
				{showSeason &&
					<ul id='season-select-options' onMouseLeave={() => setShowSeason(false)}>
						{displayListOptions(seasons)};
					</ul>
				}
			</div>
		</div>
	)
}

export default SeasonSelect