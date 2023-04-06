import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'


const NavBar = () => {
	return (
		<div className='nav-bar-container'>
			touchline
			<div className='nav-bar'>
					<Link to='/matches'>matches</Link><br></br>
					<Link to='/nations'>nations</Link><br></br>
					<Link to='/leagues'>leagues</Link>
			</div>
			<div className='auth-buttons'>
				<button>Log In</button>
				<button>Sign Up</button>
			</div>
		</div>
	)
}

export default NavBar