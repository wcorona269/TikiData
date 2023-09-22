import './modal.scss';
import React, { useEffect } from 'react';
import LoginForm from '../forms/login';
import SignupForm from '../forms/signup';
import { Link, Route, Routes, Switch } from 'react-router-dom';
import { showModal, closeModal } from '../../actions/modal_actions';
import { useDispatch, useSelector } from 'react-redux';

const Modal = () => {
	const dispatch = useDispatch();
	const modal = useSelector(state => state.ui.modal);
	let component;

	switch (modal.modal) {
		case 'signup':
			component = <SignupForm/>
			break;
		case 'login':
			component = <LoginForm/>
			break;
		default:
			return null;
	}

	const handleModal = (e) => {
		e.preventDefault();
		dispatch(closeModal())
	}
	
	return (
		<div className='modal-background' onClick={handleModal}>
			<div className='modal-body' onClick={e => e.stopPropagation()}>
				{component}
			</div>
		</div>
	)
}

export default Modal