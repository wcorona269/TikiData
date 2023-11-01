import { Box, Container, Grid, Link, Typography } from '@mui/material';
import './footer.scss';
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Footer = () => {


	return (
		<Box sx={{
			width: "100%",
			height: "auto",
			backgroundColor: "background.paper",
			paddingTop: "1rem",
			paddingBottom: "1rem",
		}} 
		>
			<Container>
				<Grid container >
					<Grid item xs={6}>
						<Typography variant='h6' sx={{color: 'text.primary'}} >
							Will Corona
						</Typography>
						<Link target="_blank" href="https://www.linkedin.com/in/william-corona/">
							<i className="fa-brands fa-linkedin"></i>
							LinkedIn
						</Link>
						<Link target="_blank" href="https://github.com/wcorona269">
							<i className="fa-brands fa-square-github"></i>
							GitHub
						</Link>
						<Link target="_blank" href="https://will-corona.info/">
							<i className="fa-solid fa-user"></i>
							Website
						</Link>
					</Grid>
				</Grid>
				<Grid item xs={6}>
					<Container>
						<Typography variant='h6'>About Me</Typography>
						<Typography variant='body1'>App Academy</Typography>
						<Typography variant='body1'>Soccer enjoyer</Typography>
						<Typography variant='body1'>Music enjoyer</Typography>
					</Container>
				</Grid>
			</Container>
		</Box>
	)
}

export default Footer