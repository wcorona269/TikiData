import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';

const LoggedInNav = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const [showDropdown, setShowDropdown] = useState(false);

	const username = useSelector(state => state.users?.user?.username ?? null);

	const handleClick = () => { 
		dispatch(logoutUser())
	}

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	}
	
	return (
		<div className='logged-in-nav'>
			<Link to='/news' className={location.pathname === '/news' ? 'active-link' : 'inactive-link'}><i className="fa-regular fa-newspaper"></i></Link><br></br>
			<Link to='/matches' className={location.pathname === '/matches' ? 'active-link' : 'inactive-link'}><i className="fa-solid fa-futbol"></i></Link><br></br>
			<Link to='/explore' className={location.pathname === '/explore' ? 'active-link' : 'inactive-link'}><i className="fa-solid fa-globe"></i></Link>
			<div className={`more-dropdown ${showDropdown ? 'dropdown-showing' : ''}`} onMouseLeave={() => setShowDropdown(false)}>
				<div onClick={() => toggleDropdown()} className='dropdown-button'>
					<i className="fa-solid fa-circle-user"></i>
					{username}
				</div>
				<div className={`dropdown-content ${showDropdown ? 'visible' : ''}`}>
            <Link to='/my-profile' id='my-profile-link'>
							<div>
								profile
							</div>
						</Link>
            <div onClick={handleClick}>log out</div>
        </div>
			</div>
		</div>
	)
}

export default LoggedInNav;