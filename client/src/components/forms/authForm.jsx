import React, { useEffect, useState } from 'react';

const AuthForm = ({fields, onSubmit, error, errorMessage}) => {
	let [formState, setFormState] = useState({});
	let [isValid, setIsValid] = useState(null);
	let [errors, setErrors] = useState([])

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState((prevState) => ({ ...prevState, [ name ]: value }));
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateFields);
		if (isValid === true) {
			onSubmit(formState);
		}
	}

	const isValidEmail = (email) =>  {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	const validateFields = () => {
		let result = []
		
		for (let field of fields) {

			if (formState[field] === undefined) {
				setIsValid(false);
				result.push('All fields must be filled out');
				break;
			}

			if (field === 'password' && formState[field] && !(formState[field].length >= 8)) {
				setIsValid(false);
				result.push('Password must be at least 8 characters')
				break;
			} 
			
			if (field === 'confirmPassword' && formState['password'] && formState[field] !== formState['password']) {
				setIsValid(false);
				result.push("Passwords don't match")
				break;
			}

			if (field === 'email' && !isValidEmail(formState[field])) {
				setIsValid(false);
				result.push('All fields must be filled out')
				break;
			}
		}
		return result;
	}

	return (
		<form onSubmit={handleSubmit}>
			{fields.map((field) => (
				<input
					key={field}
					type={field === 'password' || field === 'confirmPassword' ? 'password' : 'text'}
					placeholder={field}
					name={field}
					value={formState[field] || ''}
					onChange={handleChange}
				/>
			))
		}
		{errors.map((error) => (
			<p className='auth-error-message' key={error}>
				{error}
			</p>
		))}
		<button

			type="submit"
			className={isValid === true ? 'auth-form-btn' : 'auth-form-btn error-btn' }
		>
			Submit
		</button>
		</form>
	)
}

export default AuthForm;
