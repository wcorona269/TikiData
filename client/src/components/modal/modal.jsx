import React, { useEffect } from 'react';
import LoginForm from '../forms/login';
import SignupForm from '../forms/signup';
import { Link, Route, Routes, Switch } from 'react-router-dom';

const Modal = (props) => {
	
	const {modal} = props
	let component;

	switch (modal) {
		case 'signup':
			component = <SignupForm/>
			break;
		case 'login':
			component = <LoginForm/>
			break;
	}
	
	return (
		<div className='modal-background'>
			<div className='modal-body' onClick={e => e.stopPropagation()}>
				{component}
			</div>
		</div>
	)
}

export default Modal