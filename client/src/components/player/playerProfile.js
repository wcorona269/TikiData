import React from 'react'
import { useParams } from 'react-router-dom';

const PlayerProfile = () => {
	const { playerId }= useParams();

	return (
		<div>PlayerProfile</div>
	)
}


export default PlayerProfile