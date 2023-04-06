import React, { useEffect, useState } from 'react'

const SignupForm = (props) => {

	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
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
				<p>username</p>
				<input type='text' name='username' onChange={updateInfo} />
				<p>email</p>
				<input type='text' name='email' onChange={updateInfo} />
				<p>password</p>
				<input type='password' name='password' onChange={updateInfo} />
				<p>confirm password</p>
				<input type='password' name='confirmPassword' onChange={updateInfo} />
				<button type='submit' value='sign up'/>
			</form>
		</div>
	)
}

export default SignupForm