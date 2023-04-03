import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom'


const NavBar = () => {
	
	return (
		<div className='nav-bar-container'>
			Total Football
			<div className='nav-bar'>
					<Link to='/matches'>matches</Link><br></br>
					<Link to='/nations'>nations</Link><br></br>
					<Link to='/leagues'>leagues</Link>
			</div>
		</div>
	)
}

export default NavBar