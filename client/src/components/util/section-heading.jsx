import { Typography, useTheme } from '@mui/material'
import React from 'react'

const SectionHeading = ({ variant, content, img }) => {
	const theme = useTheme();
	let size = variant === 'h5' ? '3rem' : '2rem';
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
			{img && 
				<img src={img} style={{ height: size, width: size, marginRight: mr }} />
			}
			{content}
		</Typography>
	)
}

export default SectionHeading;