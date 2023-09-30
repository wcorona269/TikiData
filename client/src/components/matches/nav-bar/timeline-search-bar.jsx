import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';


const TimelineSearchBar = () => {
	return (
		<Box className='timeline-search-bar' sx={{ '& > :not(style)': { m: 1 } }}>
			<div>
				<TextField
					id="input-with-icon-textfield"
					label="Filter"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
					variant="standard"
				/>
			</div>
		</Box>
	)
}

export default TimelineSearchBar