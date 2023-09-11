import React from 'react'

const Lineups = ({lineups}) => {

	return (
		<div className='lineups-tab'>
			{
				lineups.map((lineup, idx) => {
		
					const logo = lineup.team.logo;
					const name = lineup.team.name;
					const coach = lineup.coach.name;
					const eleven = lineup.startXI;
					const subs = lineup.substitutes;

					return (
						<table>
							<tbody>
								<tr id='lineup-header'><td>Coach</td></tr>
								<tr><td>{coach}</td></tr>
								<tr id='lineup-header'><td>Starting XI</td></tr>
								{eleven.map((player, idx) => (
									<tr key={idx}><td>{player.player.name}</td></tr>
								))}
								<tr id='lineup-header'><td>Bench</td></tr>
								{subs.map((sub, idx) => (
									<tr key={idx}><td>{sub.player.name}</td></tr>
								))}
							</tbody>
						</table>
					)
			})}
		</div>

	)
}

export default Lineups;