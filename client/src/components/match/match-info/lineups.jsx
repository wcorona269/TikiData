import React from 'react'

const Lineups = ({lineups}) => {
	const homeLineup = lineups[0];
	const awayLineup = lineups[1]
	return (
		<div className='lineups-tab'>
			{lineups.map((lineup, idx) => (
				<div className='lineup-column' id='home-team-lineup'>
					<h2><img src={lineup.team.logo}/>{lineup.team.name}</h2>
					<p>
						Coach: {lineup.coach.name}
					</p>
					<p>Starting XI</p>
					<ul>
						{lineup.startXI.map((player, idx) => (
							<li key={idx}>
								{player.player.name}
							</li>
						))}
					</ul>
					<br/>
					<p>Bench</p>
					<ul>
						{lineup.substitutes.map((sub, idx) => (
							<li key={idx}>
								{sub.player.name}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	)
}

export default Lineups;