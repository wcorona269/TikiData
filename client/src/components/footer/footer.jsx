import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const Footer = () => {


	return (
		<footer>
			<div>
				<h3>Will Corona</h3>
				<a target="_blank" href="https://www.linkedin.com/in/william-corona/"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
				<a target="_blank" href="https://github.com/wcorona269"><i className="fa-brands fa-square-github"></i> GitHub</a>
				<a target="_blank" href="https://will-corona.info/"><i className="fa-solid fa-user"></i> Website</a>
			</div>
			<div>
				<h3>About Me</h3>
				<p>App Academy</p>
				<p>Soccer enjoyer</p>
				<p>Music enjoyer</p>
			</div>
		</footer>
	)
}

export default Footer