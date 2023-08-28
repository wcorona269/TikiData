import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';

const LoggedInNav = () => {
	const location = useLocation();
	const dispatch = useDispatch();
	const [showDropdown, setShowDropdown] = useState(false);

	const access_token = useSelector(state => state.session.user?.access_token ?? null);
	const username = useSelector(state => state.session.user?.username ?? null);

	const logoutFunction = () => {
		dispatch(logoutUser({
			access_token: access_token === null ? 'null' : access_token
		}))
	}

	const toggleDropdown = () => {
		setShowDropdown(!showDropdown);
	}
	
	return (
		<div className='nav-bar'>
			<Link to='/news' className={location.pathname === '/news' ? 'active-link' : 'inactive-link'}><i className="fa-regular fa-newspaper"></i> news</Link><br></br>
			<Link to='/matches' className={location.pathname === '/matches' ? 'active-link' : 'inactive-link'}><i className="fa-solid fa-futbol"></i> matches</Link><br></br>
			<Link to='/explore' className={location.pathname === '/explore' ? 'active-link' : 'inactive-link'}><i className="fa-solid fa-globe"></i> explore</Link>
			<div className={`more-dropdown ${showDropdown ? 'dropdown-showing' : ''}`} onMouseLeave={() => setShowDropdown(false)}>
				<div onClick={() => toggleDropdown()} className='dropdown-button'>
					<i className="fa-solid fa-circle-user"></i>
					{username}
				</div>
				<div className={`dropdown-content ${showDropdown ? 'visible' : ''}`}>
            <Link to='/my-profile'>
							<div>
								profile
							</div>
						</Link>
            <div>log out</div>
        </div>
			</div>
		</div>
	)
}

export default LoggedInNav;