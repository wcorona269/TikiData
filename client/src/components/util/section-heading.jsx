import { Typography, useTheme } from '@mui/material'
import React from 'react'

const SectionHeading = ({ variant, content, img, size }) => {
	const theme = useTheme()

	return (
		<Typography
			className='section-heading'
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
				<img src={img} style={{ height: {size}, width: {size}, marginRight: '1rem' }} />
			}
			{content}
		</Typography>
	)
}

export default SectionHeading;