import React from 'react'

const CardComponent = ({event, key}) => {
	const yellowCard = 'https://w7.pngwing.com/pngs/942/268/png-transparent-penalty-card-yellow-card-association-football-referee-sim-cards-electronics-rectangle-color.png'
	const redCard = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Red_card.svg/1200px-Red_card.svg.png'
	let src;

	event.type === 'Red Card' ? (src = redCard) : (src = yellowCard)

	return (
		<li key={key}>
			<img src={src}/>
			<p>{event.player.name}</p>
		</li>
	)
}

export default CardComponent
