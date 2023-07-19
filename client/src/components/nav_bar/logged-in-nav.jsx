import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';

const LoggedInNav = () => {
	const dispatch = useDispatch();
	const access_token = useSelector(state => state.session.user?.access_token ?? null)

	const logoutFunction = () => {
		dispatch(logoutUser({
			access_token: access_token === null ? 'null' : access_token
		}))
	}
	
	return (
		<div className='nav-bar'>
			<Link to='/matches'>matches</Link><br></br>
			<Link to='/news'>news</Link><br></br>
			<Link to='/leagues'>leagues</Link>
			<button onClick={() => logoutFunction()}>
				Logout
			</button>
		</div>
	)
}

export default LoggedInNav;