import { Typography, useTheme, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Title = ({ variant, content, img, back }) => {
	const theme = useTheme();
	const navigate = useNavigate();
	let size = variant === 'h5' ? '2rem' : '1.5rem';
	let mr = variant === 'h5' ? '1rem' : '.5rem'

	return (
		<Typography
			variant={variant}
			sx={{
				p: '1rem',
				marginBottom: '0px !important',
				borderBottom: `1px solid ${theme.palette.divider}`,
				fontFamily: theme.typography.bold,
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'left',
				alignItems: 'center'
			}}
		>
			{back &&
				<IconButton sx={{ p: 0, m: 0, marginRight: 2 }} onClick={() => navigate(-1)}>
					<ArrowBackIcon />
				</IconButton>
			}
			{img && 
				<img src={img} style={{ height: size, width: size, marginRight: mr }} />
			}
			{content}
		</Typography>
	)
}

export default Title;