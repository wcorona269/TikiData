import React, { useEffect, useState } from 'react';

const AuthForm = ({fields, onSubmit}) => {
	const [formState, setFormState] = useState({});
	const [isValid, setIsValid] = useState(null);
	const [errors, setErrors] = useState([]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState((prevState) => ({ ...prevState, [ name ]: value }));
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateFields());
		if (isValid === true) {
			onSubmit(formState);
		}
		console.log(errors);
	}

	const isValidEmail = (email) =>  {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email);
	}

	const validateFields = () => {
		let result = []
		setIsValid(true);
		for (let field of fields) {


			if (!formState[field]) {
				setIsValid(false);
				result.push('All fields must be filled out');
				break;
			}

			if (field === 'password' && !!formState[field] && !(formState[field].length >= 8)) {
				setIsValid(false);
				result.push('Password must be at least 8 characters')
				break;
			}
			
			if (field === 'confirmPassword' && !!formState['password'] && formState[field] !== formState['password']) {
				setIsValid(false);
				result.push("Passwords don't match")
				break;
			}

			if (field === 'email' && !isValidEmail(formState[field])) {
				setIsValid(false);
				result.push('Please enter a valid email')
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
		<p className='auth-error-message'>
			{errors.map((error) => (
				<p className='auth-error-message' key={error}>
					{error}
				</p>
			))}	
		</p>
		<button

			type="submit"
			className={isValid === true ? 'auth-form-btn' : 'auth-form-btn error-btn' }
		>
			submit
		</button>
		</form>
	)
}

export default AuthForm;
