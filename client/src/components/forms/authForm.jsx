import React from 'react'
import { useEffect, useState } from 'react'


const AuthForm = ({fields, validationRules, onSubmit, error, errorMessage}) => {
	const [formState, setFormState] = useState();

	useEffect(() => {
		setFormState({})
		console.log(formState)
	}, [])

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormState((prevState) => ({ ...prevState, [ name ]: value }));
	}

	const handleSubmit = (e) => {
		e.preventDefault;
		const isValid = validateField();
		if (isValid) {
			onSubmit(formState);
		}
	}

	const validateFields = () => {
		let isValid = true;
		for (let field of fields) {
			if (validationRules[field] && !validationRules[field](formState[field])) {
				isValid = false;
			}
		}
		return isValid;
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
		{error && <p>{errorMessage}</p>}
		<button type="submit">Submit</button>
		</form>
	)
}

export default AuthForm;
