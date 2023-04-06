// user auth: username, email, password. Thats it.

import React, { useEffect, useState } from 'react'

const LoginForm = (props) => {

	const [user, setUser] = useState({
		usernameOrEmail: '',
		password: ''
	})

	useEffect(() => {
		console.log(user)
	}, [user])

	const updateInfo = (e) => {
		const {name, value} = e.target
		setUser({ ...user, [name]: value })
	}

	return (
		<div className='modal-form-container'>
			<form>
				<p>username or email</p>
				<input type='text' name='usernameOrEmail' onChange={updateInfo}/>
				<p>password</p>
				<input type='password' name='password' onChange={updateInfo}/>
				<button type='submit'>log in</button>
			</form>
		</div>
	)
}

export default LoginForm