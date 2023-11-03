import { Box, Container, Grid, Link, Paper, Typography, useTheme } from '@mui/material';
import './footer.scss';
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Footer = ({ lightMode }) => {
	const theme = useTheme();
	const StyledTypography = (content, variant) => {
		return (
			<Typography variant={variant} sx={{ color: theme.palette.text.primary }}>
				{content}
			</Typography>
		)
	}
	
	return (
		<Box elevation={1} sx={{
			background: theme.palette.background.paper,
			borderRadius: '0px',
			width: "100%",
			height: "auto",
			paddingTop: "2rem",
			paddingBottom: "2rem",
		}}
		>
			<Container sx={{width: '100%'}}  >
				<Grid container direction='row' sx={{width: '50%', margin: 'auto'}} >
					<Grid item xs={6}>
						{StyledTypography('Will Corona', 'h6')}
						<Typography variant='body1' >
							<Link target="_blank" href="https://www.linkedin.com/in/william-corona/" sx={{ color: theme.palette.text.primary }} >
								<i style={{marginRight: '.5rem'}} className="fa-brands fa-linkedin"></i>
								LinkedIn
							</Link>
						</Typography>
						<Typography variant='body1' >
							<Link target="_blank" href="https://github.com/wcorona269" sx={{ color: theme.palette.text.primary }} >
								<i style={{marginRight: '.5rem'}} className="fa-brands fa-square-github"></i>
								GitHub
							</Link>
						</Typography>
						<Typography variant='body1' >
							<Link target="_blank" href="https://will-corona.info/" sx={{ color: theme.palette.text.primary }} >
								<i style={{marginRight: '.5rem'}} className="fa-solid fa-user"></i>
								Website
							</Link>
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Container>
							<Typography sx={{ color: theme.palette.text.primary }} variant='h6'>
								About Me
							</Typography>
							<Typography sx={{ color: theme.palette.text.primary }} variant='body1'>
								App Academy
							</Typography>
							<Typography sx={{ color: theme.palette.text.primary }} variant='body1'>
								Soccer enjoyer
							</Typography>
							<Typography sx={{ color: theme.palette.text.primary }} variant='body1'>
								Music enjoyer
							</Typography>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default Footer