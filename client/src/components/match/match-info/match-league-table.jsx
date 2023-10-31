import { Paper, useTheme } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MatchLeagueTable = ({ match }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const theme = useTheme();
	const leagueId = match?.league?.id;
	// const isLoading = useSelector(state => state.tables.isLoading)

	useEffect(() => {
		// if (!isLoading) {
		// 	dispatch(fetchTable(leagueId))
		// }
	}, [])

	return (
		<Paper elevation={2}>

		</Paper>
	)
}

export default MatchLeagueTable;