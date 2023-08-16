import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';

const LoggedInNav = () => {
	const dispatch = useDispatch();
	const [showDropdown, setShowDropdown] = useState(false);

	const access_token = useSelector(state => state.session.user?.access_token ?? null);

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
			<Link to='/matches'>matches</Link><br></br>
			<Link to='/news'>news</Link><br></br>
			<Link to='/leagues'>leagues</Link>
			<div className={`more-dropdown ${showDropdown ? 'dropdown-showing' : ''}`}>
				<div onClick={() => toggleDropdown()} className='dropdown-button'>
					username
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