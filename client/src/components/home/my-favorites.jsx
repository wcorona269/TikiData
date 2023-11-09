import { Box, Chip, Paper } from '@mui/material'
import React from 'react'
import Title from '../util/section-heading'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFavorite } from '../../actions/favorite_actions'
import NoDataMessage from '../util/no-data/no-data-message'
import { useNavigate } from 'react-router-dom'

const UserFavorites = () => {
	const favorites = useSelector(state => state.favorites?.favorites);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleClick = (favorite) => {
		navigate(`/${favorite.target_type}/${favorite.target_id}`)
	}

	const displayFavorites = () => {
		let result = [];
		for (let favorite of favorites) {
			result.push(
				<Chip 
					variant='outlined' 
					color='primary'
					label={favorite.name}
					onClick={() => handleClick(favorite)}
					sx={{m: .5}}
				/>
			)
		}
		return result;
	}

	if (!favorites) return null;
	return (
		<Box>
			<Title variant='h5' content='My Favorites'/>
			<Box sx={{paddingTop: 1}}>
				{displayFavorites()}
			</Box>
		</Box>
	)
}

export default UserFavorites